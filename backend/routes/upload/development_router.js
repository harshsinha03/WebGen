const path = require('path');
const express = require('express');
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
const { protectAPI } = require('../../services/protection/protection');

const { ImageMimeTypes } = require('../../constants/ImageMimeTypes');

const router = express.Router();

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => {
    cb(null, path.resolve(__dirname, '../', '../', 'upload'));
  },
  filename: (_req, file, cb) => {
    // this overwrites the default multer renaming callback
    // and simply saves the file as it is
    const fileName = ''.concat(uuidv4(), file.originalname);
    cb(null, fileName);
  },
});

const upload = multer({
  storage: storage,
  fileFilter: (_req, file, cb) => {
    cb(null, ImageMimeTypes.includes(file.mimetype));
  },
  limits: {
    fileSize: 10 * 1024 * 1024,
    files: 1,
  },
});

/************************** Routes to handle file upload ************************* */

router.route('/single').post(upload.single('image'), (req, res) => {
  const { apiKey } = req.body;
  if (!apiKey || !protectAPI(apiKey, true)) {
    res.status(403).send({ error: 'API Key not valid.' }).end();
  } else {
    if (!req.file) {
      res.status(400).send({
        error: "No file has been selected or file doesn't have proper extension",
      });
    } else {
      const imagePath = '/upload/' + req.file.filename;
      res.status(201).send({ url: imagePath, fileName: req.file.originalname });
    }
  }
});

module.exports = { router };
