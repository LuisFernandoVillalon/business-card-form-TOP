import uniqid from "uniqid";
import examplePhoto from "./example_photo.png";

const exampleResume = {
    personalInfo: {
      firstName: 'John',
      lastName: 'Doe',
      title: 'Senior Web Developer',
      photo: examplePhoto,
      address: 'Example Street 10',
      phoneNumber: '123456789',
      email: 'john.doe@gmail.com',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempus imperdiet nisl sed vestibulum. Donec gravida, nulla eget blandit fermentum, mauris nisi rutrum libero, ac pharetra erat est sit amet tellus. ',
    },
    skills: [ 
        {
          id: uniqid(),
          skill: "Cool",
        },
        {
            id: uniqid(),
            skill: "Professional",
        },
        {
            id: uniqid(),
            skill: "Outgoing",
        },
      ],
    experience: [
      {
        id: uniqid(),
        title: 'Senior Web Developer',
        company: 'Facebook Inc.',
        city: 'Menlo Park',
        startDate: '2015',
        endDate: 'Present',
        description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempus imperdiet nisl sed vestibulum. Donec gravida, nulla eget blandit fermentum, mauris nisi rutrum libero, ac pharetra erat est sit amet tellus. ',
      },
      {
        id: uniqid(),
        title: 'Junior Web Developer',
        company: 'Tesla Inc.',
        city: 'Palo Alto',
        startDate: '2012',
        endDate: '2015',
        description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempus imperdiet nisl sed vestibulum. Donec gravida, nulla eget blandit fermentum, mauris nisi rutrum libero, ac pharetra erat est sit amet tellus. ',
      },
      {
        id: uniqid(),
        title: 'UI / UX Designer',
        company: 'Google LLC',
        city: 'Mountain View',
        startDate: '2010',
        endDate: '2012',
        description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempus imperdiet nisl sed vestibulum. Donec gravida, nulla eget blandit fermentum, mauris nisi rutrum libero, ac pharetra erat est sit amet tellus. ',
      },
    ],
    education: [
      {
        id: uniqid(),
        school: 'University of Technology',
        eduCity: 'Oklahoma',
        degree: 'Master',
        eduStartDate: '2008',
        eduEndDate: '2010',
      },
      {
        id: uniqid(),
        school: 'University of Design Art',
        eduCity: 'New York',
        degree: 'Bachelor',
        eduStartDate: '2005',
        eduEndDate: '2008',
      },
    ],
  }
  
  export default exampleResume;