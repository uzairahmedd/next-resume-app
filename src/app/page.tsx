"use client";

import { useState } from "react";
import Datepicker from "tailwind-datepicker-react"

export default function Home() {

  const dumyExperienceObject = {
    company_name: 'Company C',
    company_location: 'London',
    start_date: '01/01/12',
    end_date: '02/02/13',
    currently_working: false,
    objectives: 'Sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis'
  }
  
  const dumyEduExperienceObject = {
    name: 'Institution C',
    location: 'London',
    start_date: '01/01/12',
    end_date: '02/02/13',
    currently_studying: false,
    objectives: 'Sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis'
  }

  const dumyExperience = [
    {
      company_name: 'Company A',
      company_location: 'London',
      start_date: '01/01/12',
      end_date: '02/02/13',
      currently_working: false,
      objectives: 'Sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis'
    },
    {
      company_name: 'Company B',
      company_location: 'London',
      start_date: '01/01/12',
      end_date: '02/02/13',
      currently_working: false,
      objectives: 'Sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis'
    }
  ]
  
  const dumyEduExperience = [
    {
      name: 'Institution A',
      location: 'London',
      start_date: '01/01/12',
      end_date: '02/02/13',
      currently_studying: false,
      objectives: 'Sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis'
    },
    {
      name: 'Institution B',
      location: 'London',
      start_date: '01/01/12',
      end_date: '02/02/13',
      currently_studying: false,
      objectives: 'Sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis'
    }
  ]

  const options = {
    title: "Select Date",
    autoHide: true,
    todayBtn: true,
    clearBtn: true,
    clearBtnText: "Clear",
    maxDate: new Date,
    minDate: new Date("1950-01"),
    theme: {
      background: "bg-gray-700 dark:bg-gray-800",
      todayBtn: "",
      clearBtn: "",
      icons: "",
      text: "text-white",
      disabledText: "text-slate-600",
      input: "",
      inputIcon: "",
      selected: "",
    },
    icons: {
      prev: () => <span>Previous</span>,
      next: () => <span>Next</span>,
    },
    datepickerClassNames: "top-12",
    defaultDate: new Date("2022-01"),
    language: "en",
    disabledDates: [],
    weekDays: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
    inputNameProp: "date",
    inputIdProp: "date",
    inputPlaceholderProp: "Select Date",
    inputDateFormatProp: {
      day: "numeric",
      month: "long",
      year: "numeric"
    }
  }

  const EXPERIENCE_LIMIT = 3;

  const [field, setField] = useState('');
  // const [show, setShow] = useState(false)
  const [date, setSelectedDate] = useState(new Date)
  const [position, setPosition] = useState('Software Engineer')
  const [name, setName] = useState('John Doe')
  const [email, setEmail] = useState('john@gmail.com')
  const [phone, setPhone] = useState('+1234567890')
  const [nationality, setNationality] = useState('British')
  const [summary, setSummary] = useState("Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat. ")
  const [workExperience, setWorkExperience] = useState(dumyExperience)
  const [eduExperience, setEduExperience] = useState(dumyEduExperience)

  const handleChange = (value: string|number, method: Function) => {
    method(value)
  }
  
  const handleChangeWithIndex = (key: string, value: string|number, state: any, method: any, index: number) => {
    if(index >= 0){
      let data = state;
      data[index][key] = value
      method([
        ...data
      ])
    }
  }

  const handleAddSection = (name: string) => {
    if(name == 'work_experience'){
      setWorkExperience([
        ... workExperience,
        dumyExperienceObject
      ])
    } else if (name == 'edu_experience'){
      setEduExperience([
        ... eduExperience,
        dumyEduExperienceObject
      ])
    }
  }
  
  const handleRemoveSection = (name: string, index: number) => {
    if(name == 'work_experience'){
      if(index > -1){
        workExperience.splice(index, 1);
        setWorkExperience([
          ... workExperience,
        ])
      }
    } else if (name == 'edu_experience'){
      if(index > -1){
        eduExperience.splice(index, 1);
        setEduExperience([
          ... eduExperience,
        ])
      }
    }
  }

  const handleDateChange = (key: string, selectedDate: Date, state: any, method: any, index: number) => {
    const date = selectedDate.getDate() + '/' + (selectedDate.getMonth() + 1) + '/' +  selectedDate.getFullYear();
		handleChangeWithIndex(key, date, state, method, index)
	}

  return (
    <main className="p-24 text-slate-100 bg-slate-800">
    <form>
      <div className="space-y-12">
        <div className="border-b border-gray-100/10">
          <div className="mt-10 grid grid-cols-6 gap-x-6sm:grid-cols-6">
            <div className="col-start-2 col-span-4">
              <div className="col-span-full">
                {
                  field == 'name' 
                  ? <input className="block w-1/2 border-0 text-2xl font-bold leading-7 bg-transparent pl-1 placeholder:text-gray-900" autoFocus name="name" type="text" value={name} onChange={(e) => handleChange(e.target.value, setName)} onBlur={() => setField('')}/>
                  : <h1 className="text-2xl font-bold leading-7 sm:truncate sm:text-3xl sm:tracking-tight" onClick={() => setField('name')}>{name}</h1>
                }
              </div>
              <div className="col-span-full">
                {
                  field == 'position' 
                  ? <input className="block w-1/2 border-0 text-xl font-semibold leading-7 bg-transparent pl-1 placeholder:text-gray-900" autoFocus name="position" type="text" value={position} onChange={(e) => handleChange(e.target.value, setPosition)} onBlur={() => setField('')}/>
                  : <h2 className="text-xl font-semibold leading-7" onClick={() => setField('position')}>{position}</h2>
                }
              </div>
              <div className="sm:col-span-1 py-2">
                {field == 'summary'
                ?
                  <div className={`mt-2 ${field != 'summary' && 'hidden'}`}>
                    <textarea name="summary" value={summary} rows={2} autoFocus className="block w-full bg-transparent rounded-md border-0 pl-1 shadow-sm placeholder:text-gray-400 sm:text-sm" onChange={(e) => handleChange(e.target.value, setSummary)} onBlur={() => setField('')}></textarea>
                  </div>
                : <p onClick={() => setField('summary')}>{summary}</p>
                }
              </div>
            </div>
          </div>
          <div className="mt-4 mb-8 grid grid-cols-6 gap-x-6 sm:grid-cols-6">
            <div className="col-start-2 col-span-4 flex justify-between">
              <div className="flex justify-start">
                <label className="block text-xs leading-6 mr-4 text-teal-400">Email</label>
                {
                  field == 'email' 
                  ? <input className="block w-1/2 border-0 bg-transparent pl-1 placeholder:text-gray-900" autoFocus name="email" type="text" value={email} onChange={(e) => handleChange(e.target.value, setEmail)} onBlur={() => setField('')}/>
                  : <h3 onClick={() => setField('email')}>{email}</h3>
                }
              </div>
              <div className="col-span-1 flex justify-start">
                <label className="block text-xs leading-6 mr-4 text-teal-400">Phone</label>
                {
                  field == 'phone' 
                  ? <input className="block w-1/2 border-0 bg-transparent pl-1 placeholder:text-gray-900" autoFocus name="phone" type="text" value={phone} onChange={(e) => handleChange(e.target.value, setPhone)} onBlur={() => setField('')}/>
                  : <h3 onClick={() => setField('phone')}>{phone}</h3>
                }
              </div>
              <div className="col-span-1 flex justify-start">
                <label className="block text-xs leading-6 mr-4 text-teal-400">Nationality</label>
                {
                  field == 'nationality' 
                  ? <input className="block w-1/2 border-0 bg-transparent pl-1 placeholder:text-gray-900" autoFocus name="nationality" type="text" value={nationality} onChange={(e) => handleChange(e.target.value, setNationality)} onBlur={() => setField('')}/>
                  : <h3 onClick={() => setField('nationality')}>{nationality}</h3>
                }
              </div>
            </div>
          </div>
        </div>
        <div className="border-b border-gray-100/10">
          <div className="mt-4 grid grid-cols-6 gap-x-6 gap-y-2 sm:grid-cols-6">
            <div className="col-start-2 col-span-4">
              <div className="flex justify-between col-span-full w-1/2">
                <div className="">
                  <p className="mb-7 text-xl font-semibold leading-7 text-teal-400">Professional Experience</p>
                </div>
                <div className="">
                  <button type="button" className="btn-text text-lg font-semibold leading-7" onClick={() => handleAddSection('work_experience')}>+</button>
                </div>
              </div>
              {
                workExperience.map((work, index) => {
                  return (
                    <div className="col-span-full mb-6" key={index}>
                      <div className="col-span-full w-1/2">
                        <div className="flex justify-between col-span-full">
                          {
                            field == `work_company_name_${index}` 
                            ? <input className="block w-1/2 border-0 bg-transparent pl-1 placeholder:text-gray-900" autoFocus name="company_name" type="text" value={workExperience[index].company_name} onChange={(e) => handleChangeWithIndex(e.target.name, e.target.value, workExperience, setWorkExperience, index)} onBlur={() => setField('')}/>
                            : <h3 className="text-lg font-semibold leading-7" onClick={() => setField(`work_company_name_${index}`)}>{work.company_name}</h3>
                          }
                          <div className="">
                            <button type="button" className="btn-text text-lg font-semibold leading-7" onClick={() => handleRemoveSection('work_experience', index)}>-</button>
                          </div>
                        </div>
                      </div>
                      <div className="flex">
                        <div className="block w-64 flex gap-2">
                          {
                            field == `work_company_start_${index}`
                            ? <input className="block w-1/2 border-0 bg-transparent pr-1 placeholder:text-gray-900 text-right" autoFocus name="start_date" type="text" value={work.start_date} onChange={(e) => handleChangeWithIndex(e.target.name, e.target.value, workExperience, setWorkExperience, index)} onBlur={() => setField('')}/>
                            : <h4 className="text-xs font-semibold leading-7" onClick={() => setField(`work_company_start_${index}`)}>{work.start_date}</h4>
                          }
                          -
                          {
                            field == `work_company_end_${index}`
                            ? <input className="block w-1/2 border-0 bg-transparent pr-1 placeholder:text-gray-900 text-right" autoFocus name="end_date" type="text" value={work.end_date} onChange={(e) => handleChangeWithIndex(e.target.name, e.target.value, workExperience, setWorkExperience, index)} onBlur={() => setField('')}/>
                            : <h4 className="text-xs font-semibold leading-7" onClick={() => setField(`work_company_end_${index}`)}>{work.end_date}</h4>
                          }                        
                        </div>
                        <div  className="block w-64 flex justify-end text-right">
                          {
                            field == `work_company_location_${index}`
                            ? <input className="block w-1/2 border-0 bg-transparent pr-1 placeholder:text-gray-900 text-right" autoFocus name="company_location" type="text" value={work.company_location} onChange={(e) => handleChangeWithIndex(e.target.name, e.target.value, workExperience, setWorkExperience, index)}/>
                            : <h3 className="text-sm font-semibold leading-7" onClick={() => setField(`work_company_location_${index}`)}>{work.company_location}</h3>
                          }
                        </div>
                      </div>
                      <div className="col-span-full py-2">
                        {field == `work_objectives_${index}` 
                        ?
                          <div className={`mt-2 ${field != `work_objectives_${index}` && 'hidden'}`}>
                            <textarea name='objectives' value={work.objectives} rows={2} autoFocus className="block w-full bg-transparent rounded-md border-0 pl-1 shadow-sm placeholder:text-gray-400 sm:text-sm" onChange={(e) => handleChangeWithIndex(e.target.name, e.target.value, workExperience, setWorkExperience, index)}></textarea>
                          </div> 
                        : <p onClick={() => setField(`work_objectives_${index}`)}>{work.objectives}</p>
                        }
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
        
        <div className="border-b border-gray-100/10">
          <div className="mt-4 grid grid-cols-6 gap-x-6 gap-y-2 sm:grid-cols-6">
            <div className="col-start-2 col-span-4">
              <div className="flex justify-between col-span-full w-1/2">
                <div className="">
                  <p className="mb-7 text-xl font-semibold leading-7 text-teal-400">Educational Experience</p>
                </div>
                <div className="">
                  <button type="button" className="btn-text text-lg font-semibold leading-7" onClick={() => handleAddSection('edu_experience')}>+</button>
                </div>
              </div>
              {
                eduExperience.map((ex, index) => {
                  return (
                    <div className="col-span-full mb-6" key={index}>
                      <div className="col-span-full w-1/2">
                        <div className="flex justify-between col-span-full">
                          {
                            field == `edu_institute_name_${index}` 
                            ? <input className="block w-1/2 border-0 bg-transparent pl-1 placeholder:text-gray-900" autoFocus name="name" type="text" value={eduExperience[index].name} onChange={(e) => handleChangeWithIndex(e.target.name, e.target.value, eduExperience, setEduExperience, index)}/>
                            : <h3 className="text-lg font-semibold leading-7" onClick={() => setField(`edu_institute_name_${index}`)}>{ex.name}</h3>
                          }
                          <div className="">
                            <button type="button" className="btn-text text-lg font-semibold leading-7" onClick={() => handleRemoveSection('edu_experience', index)}>-</button>
                          </div>
                        </div>
                      </div>
                      <div className="flex">
                        <div className="block w-64 flex gap-2">
                          {
                            field == `edu_institute_start_${index}`
                            ? <input className="block w-1/2 border-0 bg-transparent pr-1 placeholder:text-gray-900 text-right" autoFocus name="start_date" type="text" value={ex.start_date} onChange={(e) => handleChangeWithIndex(e.target.name, e.target.value, eduExperience, setEduExperience, index)} onBlur={() => setField('')}/>
                            : <h4 className="text-xs font-semibold leading-7" onClick={() => setField(`edu_institute_start_${index}`)}>{ex.start_date}</h4>
                          }
                          -
                          {
                            field == `edu_institute_end_${index}`
                            ? <input className="block w-1/2 border-0 bg-transparent pr-1 placeholder:text-gray-900 text-right" autoFocus name="end_date" type="text" value={ex.end_date} onChange={(e) => handleChangeWithIndex(e.target.name, e.target.value, eduExperience, setEduExperience, index)} onBlur={() => setField('')}/>
                            : <h4 className="text-xs font-semibold leading-7" onClick={() => setField(`edu_institute_end_${index}`)}>{ex.end_date}</h4>
                          }                        
                        </div>
                        <div  className="block w-64 flex justify-end text-right">
                          {
                            field == `edu_institute_location_${index}`
                            ? <input className="block w-1/2 border-0 bg-transparent pr-1 placeholder:text-gray-900 text-right" autoFocus name="location" type="text" value={ex.location} onChange={(e) => handleChangeWithIndex(e.target.name, e.target.value, eduExperience, setEduExperience, index)}/>
                            : <h3 className="text-sm font-semibold leading-7" onClick={() => setField(`edu_institute_location_${index}`)}>{ex.location}</h3>
                          }
                        </div>
                      </div>
                      <div className="col-span-full py-2">
                        {field == `edu_institute_objectives_${index}` 
                        ?
                          <div className={`mt-2 ${field != `edu_institute_objectives_${index}` && 'hidden'}`}>
                            <textarea name='objectives' value={ex.objectives} rows={2} autoFocus className="block w-full bg-transparent rounded-md border-0 pl-1 shadow-sm placeholder:text-gray-400 sm:text-sm" onChange={(e) => handleChangeWithIndex(e.target.name, e.target.value, eduExperience, setEduExperience, index)}></textarea>
                          </div> 
                        : <p onClick={() => setField(`edu_institute_objectives_${index}`)}>{ex.objectives}</p>
                        }
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    </form>
    </main>
  );
}
