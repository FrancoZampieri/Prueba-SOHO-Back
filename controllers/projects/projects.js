const Project = require("../../db/models/project");
const path = require("path");
const dbMock = [
  {
    title: "Sitio publico y privado",
    logo: path.join('localhost:4500/images', '/logo1.jpeg'),
    text: "Lorem ipsum dolor sit amet consectetur adipiscing elit gravida, eget iaculis dictum sodales semper commodo feugiat rhoncus, interdum morbi himenaeos potenti ultricies eu fames. Tristique ligula vestibulum laoreet felis tellus phasellus, aenean euismod ultrices hendrerit.",
    tags: {tags:['usabilidad','ui','ux','test con usuarios'],textColor: 'white'},
    image: path.join('localhost:4500/images', '/image1.jpeg'),
    bgColor: "#2f1b79",
    buttonColor: "white",
    textColor: 'white'
  },
  {
    title: "Sitios web 2017",
    logo: path.join('localhost:4500/images', '/logo2.jpeg'),
    text: "Lorem ipsum dolor sit amet consectetur adipiscing elit gravida, eget iaculis dictum sodales semper commodo feugiat rhoncus, interdum morbi himenaeos potenti ultricies eu fames. Tristique ligula vestibulum laoreet felis tellus phasellus, aenean euismod ultrices hendrerit.",    
    tags: {tags:['responsive','ui','ux'],textColor: 'white'},
    image: path.join('localhost:4500/images', '/image2.jpeg'),
    bgColor: "#d70021",
    buttonColor: "white",
    textColor: 'white'
  },
  {
    title: "TV App",
    logo: path.join('localhost:4500/images', '/logo3.jpeg'),
    text: "Lorem ipsum dolor sit amet consectetur adipiscing elit gravida, eget iaculis dictum sodales semper commodo feugiat rhoncus, interdum morbi himenaeos potenti ultricies eu fames. Tristique ligula vestibulum laoreet felis tellus phasellus, aenean euismod ultrices hendrerit.",
    tags: {tags:['usabilidad','ui','ux', 'test con usuarios'],textColor: 'black'},
    image: path.join('localhost:4500/images', '/image3.jpeg'),
    bgColor: "white",
    buttonColor: "red",
    textColor: 'black'
  },
];

module.exports.getProjects = async (req, res) => {
  try {
    let projects = await Project.find().catch((error) => {
      throw error;
    });
    if (!projects.length || !projects) {
      projects = dbMock;
    }

    res.status(200).send(projects);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

module.exports.createDB = async () => {
  try {
    await Project.deleteMany({}).catch((error) => {
      throw error;
    });

    await Project.insertMany(dbMock).catch((error) => {
      throw error;
    });
  } catch (error) {
    console.log(error);
  }
};
