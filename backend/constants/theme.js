const whiteTheme = {
  template_name: 'White Theme 1',
  template_image: 'https://bit.ly/3cr31mU',
  template_link: 'https://sid200026.github.io/typing-effect/',
  template_config: {
    introduction: {
      enable: true,
      greetingText: "Hello I'm",
      greetingColor: '#e6e6e6',
      nameText: 'Your name here',
      nameColor: '#ffffff',
      nameBold: false,
      specialisationText: [
        'Add specialisation 1',
        'Specialisation 2 comes here and so on',
      ],
      specialisationColor: '#ffffff',
      particleTheme: 'Static',
      particleThemeBackgroundColor: '#000000',
      particleThemeEntityColor: '#ff9900',
      buttonText: 'Visit My Profile',
      buttonBorder: '#ffffff',
      buttonColor: '#ffffff',
      buttonHoverBG: '#ffffff',
      buttonHoverColor: '#000000',
      font: 'Times New Roman, Times, serif, Arial, Helvetica',
      metadesc: 'Add website description here',
      title: 'Add website title here',
      hoverEffect: true,
      favicon: {},
    },
    aboutMe: {
      enable: true,
      pageHeadline: 'About Me',
      pageHeadlineColor: '#000000',
      profile: {
        url: 'https://picsum.photos/200',
        name: 'test.webp',
      },
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ultricies blandit justo, in fermentum risus egestas vitae. Quisque quis risus quis nibh lobortis facilisis. Sed porta tempor ante sit amet facilisis. Praesent ac mi sit amet velit tempor fermentum. Maecenas ornare in justo id pretium. Quisque eu tortor cursus, dapibus neque vitae, vulputate purus. Nunc rhoncus mi nec augue suscipit tristique.',
      descriptionColor: '#000000',
      skills: [
        { text: 'Skill 1', value: 90, color: '#1fafad' },
        { text: 'Skill 2', value: 85, color: '#1fafad' },
        { text: 'Skill 3', value: 80, color: '#1fafad' },
        { text: 'Skill 4', value: 75, color: '#1fafad' },
        { text: 'Skill 5', value: 75, color: '#1fafad' },
        { text: 'Skill 6', value: 70, color: '#1faead' },
        { text: 'Skill 7', value: 80, color: '#1faead' },
      ],
      skillsBackground: '#b8b9b5',
      background: '#e6e6e6',
      menuBackground: '#0d0d0d',
      menuColor: '#ffffff',
      resumeURL: 'Add Resume URL here',
      resumeButtonText: 'View My Resume',
      resumeButtonBorder: '#000000',
      resumeButtonColor: '#000000',
      resumeButtonHoverBG: '#000000',
      resumeButtonHoverColor: '#ffffff',
      resumeButtonBG: '#e6e6e6',
      resumeHoverEnable: true,
      mediaHandles: [
        { url: 'https://github.com', media: 'GitHub', theme: true },
        {
          url: 'https://www.codechef.com',
          media: 'CodeChef',
          theme: true,
        },
        { url: 'https://leetcode.com/', media: 'LeetCode', theme: true },
        { url: 'https://www.instagram.com/', media: 'Instagram', theme: true },
        {
          url: 'https://www.linkedin.com/',
          media: 'LinkedIn',
          theme: true,
        },
      ],
    },
    workExperience: {
      enable: true,
      pageHeadline: 'Work Experience',
      pageHeadlineColor: '#000000',
      background: '#d4d4d4',
      workExperienceList: [
        {
          companyName: 'Add Company Name Here',
          companyNameColor: '#000000',
          startDate: '2020-06',
          endDate: '2020-09',
          role: 'Add Role Here',
          subTextColor: '#4d4d4d',
          information: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ultricies blandit justo, in fermentum risus egestas vitae. Quisque quis risus quis nibh lobortis facilisis.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ultricies blandit justo, in fermentum risus egestas vitae. Quisque quis risus quis nibh lobortis facilisis.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ultricies blandit justo, in fermentum risus egestas vitae. Quisque quis risus quis nibh lobortis facilisis.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ultricies blandit justo, in fermentum risus egestas vitae.',
          ],
          informationColor: '#000000',
        },
        {
          companyName: 'Add Company Name Here',
          companyNameColor: '#000000',
          startDate: '2020-03',
          endDate: '2020-07',
          role: 'Add Role Here',
          subTextColor: '#4d4d4d',
          information: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ultricies blandit justo, in fermentum risus egestas vitae. Quisque quis risus quis nibh lobortis facilisis.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ultricies blandit justo, in fermentum risus egestas vitae. Quisque quis risus quis nibh lobortis facilisis.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ultricies blandit justo, in fermentum risus egestas vitae. Quisque quis risus quis nibh lobortis facilisis.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ultricies blandit justo, in fermentum risus egestas vitae.',
          ],
          informationColor: '#000000',
        },
        {
          companyName: 'Add Company Name Here',
          companyNameColor: '#000000',
          startDate: '2020-04',
          endDate: '2020-06',
          role: 'Add Role Here',
          subTextColor: '#4d4d4d',
          information: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ultricies blandit justo, in fermentum risus egestas vitae. Quisque quis risus quis nibh lobortis facilisis.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ultricies blandit justo, in fermentum risus egestas vitae. Quisque quis risus quis nibh lobortis facilisis.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ultricies blandit justo, in fermentum risus egestas vitae. Quisque quis risus quis nibh lobortis facilisis.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ultricies blandit justo, in fermentum risus egestas vitae.',
          ],
          informationColor: '#000000',
        },
      ],
    },
    defaultTheme: {
      skillColor: '#1fafad',
      subTextColor: '#4d4d4d',
      informationColor: '#000000',
      companyNameColor: '#000000',
    },
  },
};

module.exports = { whiteTheme };
