import React, {useState, useRef } from "react";
import Form from './Form/Form.js';
import PDF from './PDF/PDF.js'
import emptyResume from '../utils/emptyResume.js';
import exampleResume from '../utils/exampleResume.js';
import uniqid from "uniqid";
import { useReactToPrint } from 'react-to-print';

export default function DisplayContent() {

    const [resume, setResume] = useState(emptyResume);

      const handleChangePersonal = (e) => {
        const { name, value, type } = e.target
    
        if (type === 'file') {
          handleChangeFile(e)
          return
        }
    
        setResume((prevState) => ({
          ...prevState,
          personalInfo: {
            ...prevState.personalInfo,
            [name]: value,
          },
        }))
      }

      const handleChangeFile = (e) => {
        const { name } = e.target
        const file = e.target.files[0]
        if (!file) return
    
        const reader = new FileReader()
        reader.onload = () => {
          setResume((prevState) => ({
            ...prevState,
            personalInfo: {
              ...prevState.personalInfo,
              [name]: reader.result,
            },
          }))
        }
        reader.readAsDataURL(file)
      }
      
      const handleChangeExperience = (e, id) => {
        const { name, value } = e.target
    
        setResume((prevState) => {
          const newExperience = prevState.experience.map((experienceItem) => {
            if (experienceItem.id === id) {
              return { ...experienceItem, [name]: value }
            }
            return experienceItem
          })
          return { ...prevState, experience: [...newExperience] }
        })
      }

      const handleAddExperience = () => {
        setResume((prevState) => ({
          ...prevState,
          experience: [
            ...prevState.experience,
            {
              id: uniqid(),
              position: '',
              company: '',
              city: '',
              startDate: '',
              endDate: '',
            },
          ],
        }))
      }
                                                        
      const handleDeleteExperience = (id) => {
        setResume((prevState) => {
          const newExperience = prevState.experience.filter(
            (experienceItem) => experienceItem.id !== id
          )
          return { ...prevState, experience: [...newExperience] }
        })
      }

      const handleChangeEducation = (e, id) => {
        const { name, value } = e.target
    
        setResume((prevState) => {
          const newEducation = prevState.education.map((educationItem) => {
            if (educationItem.id === id) {
              return { ...educationItem, [name]: value }
            }
            return educationItem
          })
          return { ...prevState, education: [...newEducation] }
        })
      }

      const handleAddEducation = () => {
        setResume((prevState) => ({
          ...prevState,
          education: [
            ...prevState.education,
            {
              id: uniqid(),
              school: '',
              city: '',
              degree: '',
              startDate: '',
              endDate: '',
            },
          ],
        }))
      }
    
      const handleDeleteEducation = (id) => {
        setResume((prevState) => {
          const newEducation = prevState.education.filter(
            (educationItem) => educationItem.id !== id
          )
          return { ...prevState, education: [...newEducation] }
        })
      }
      
      const handleChangeSkill = (e, id) => {
        const { name, value } = e.target
    
        setResume((prevState) => {
          const newSkill = prevState.skills.map((skillItem) => {
            if (skillItem.id === id) {
              return { ...skillItem, [name]: value }
            }
            return skillItem
          })
          return { ...prevState, skills: [...newSkill] }
        })
      }

      const handleAddSkill = () => {
        setResume((prevState) => ({
          ...prevState,
          skills: [
            ...prevState.skills,
            {
              id: uniqid(),
              skill: ''
            },
          ],
        }))
      }

      const handleDeleteSkill = (id) => {
        setResume((prevState) => {
          const newSkill = prevState.skills.filter(
            (skillItem) => skillItem.id !== id
          )
          return { ...prevState, skills: [...newSkill] }
        })
      }

      const handleReset = () => {
        setResume(emptyResume)
      }

      const handleLoadExample = () => {
        setResume(exampleResume);
      }

      const componentRef = useRef()

      const handlePrint = useReactToPrint({ content: () => componentRef.current })

    return (
        <div className="content-container">
            <Form 
                resume={resume} 

                onChangePersonal={handleChangePersonal}        

                onChangeExperience={handleChangeExperience}
                onAddExperience={handleAddExperience}
                onDeleteExperience={handleDeleteExperience}

                onChangeEducation={handleChangeEducation}
                onAddEducation={handleAddEducation}
                onDeleteEducation={handleDeleteEducation}

                onChangeSkill={handleChangeSkill}
                onAddSkill={handleAddSkill}
                onDeleteSkill={handleDeleteSkill}

                onReset={handleReset}
                onLoadExample={handleLoadExample}
                onPrint={handlePrint}

            />
            <PDF resume={resume} ref={componentRef}/>
        </div>
    )
}