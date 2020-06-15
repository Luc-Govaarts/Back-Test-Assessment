'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("stories", 
    [
      {
        name: "example of Javascript Run4Tiger",
        content: `Moscow-based Hungry Boys designed this show-stopping campaign site for the World Wildlife Fund Russia to raise public awareness for its Save The Tiger campaign. Why race your friends when you can race a GPS-tracked Amur tiger?
        The site lets you sync your running app of choice (it currently supports nine different apps!) and pits you and other runners against the big cat, which averages 20km a day. If the tiger beats you, you donate $5 to WWF.
        It's a great concept, and there's a great design to go with it. The sharp black and yellow colour palette – uncharacteristically bold for a charity app – conveys the urgency of the Save The Tiger initiative.
        `,
        imageUrl: "https://cdn.mos.cms.futurecdn.net/c315d5167928ee13dbfc947746f1de1a-650-80.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
        homepageId: 1,
      },
      {
        name: "example of Javascript The Boat",
        content: `Longform storytelling has been steadily gaining popularity on news and media sites, but broadcasting network SBS's The Boat, an online graphic novel based on a story by Nam Le, feels unique in both its style and execution. Sumi ink illustrations, expertly executed animations and a chilling soundscape capture the story of a young Vietnamese refugee's journey.
        To bring the story to life, illustrator Matty Huynh spent six months with Nam Le's original prose, sketching thumbnails and iteratively creating the characters.        
        "I think the balance you see comes from this extended period of development," explains producer Kylie Boltin. "That deep inward-looking period enabled the core team members to know the story inside out. We knew the story beats and we knew which moments needed to be highlighted. The guiding principle was to complement the core storytelling, rather than overpower it or add an element just for the sake of it.
        The graphic panels feel like diary sketches – urgent, imperfect and deeply emotional. This site proves just how powerful and engaging online storytelling can be in the right hands.`,
        imageUrl: "https://cdn.mos.cms.futurecdn.net/cf9948973720a6b0af2ad5b04f297ab5-650-80.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
        homepageId: 1,
      },
      {
        name: "Look at this crazy cat",
        content: "This makes my laugh",
        imageUrl: "https://giphy.com/gifs/cat-funny-WXB88TeARFVvi",
        createdAt: new Date(),
        updatedAt: new Date(),
        homepageId: 2,
      },
      {
        name: "basic commands",
        content: " fdfdsf",
        imageUrl: "dsfdsfs",
        createdAt: new Date(),
        updatedAt: new Date(),
        homepageId: 3,
      },
      {
        name: "dfsdf",
        content: "dsfsdfsd",
        imageUrl: "sdfdsfdsfds",
        createdAt: new Date(),
        updatedAt: new Date(),
        homepageId: 4,
      },
    ]
  )},
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("stories", null, {})
  }
};
