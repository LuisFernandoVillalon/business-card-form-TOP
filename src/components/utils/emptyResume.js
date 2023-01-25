import emptyAvatar from "./empty_avatar.png";
import uniqid from "uniqid";

const emptyResume = {
    personalInfo: {
      firstName: "",
      lastName: "",
      title: "",
      photo: emptyAvatar,
      address: "",
      phoneNumber: "",
      email: "",
      description: "",
    },
    skills: [ 
      {
        id: uniqid(),
        skill: ""
      }
    ],
    experience: [
      {
        id: uniqid(),
        title: "",
        company: "",
        city: "",
        startDate: "",
        endDate: "",
        description: "",
      },
    ],
    education: [
      {
        id: uniqid(),
        school: "",
        city: "",
        degree: "",
        startDate: "",
        endDate: "",
      },
    ],
  };

  export default emptyResume;