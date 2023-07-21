//Generate random profile information and populate a global array with the profile object.
//This is just the test records used for development, records.json is the save file for the program.
let records = [

  {
    id: '1',
    name: 'Gretchen Leannon',
    gender: 'Female to male transgender man',
    email: 'Misty47@hotmail.com',
    dob: '1945-01-18',
    phone: '74-257426-013775-4',
    job: 'International Mobility Producer'
  },
  {
    id: '2',
    name: 'Dr. Kurt Bauch',
    gender: 'Cis female',
    email: 'Sibyl_Bogisich66@yahoo.com',
    dob: '1953-12-29',
    phone: '28-816339-138761-9',
    job: 'Human Brand Technician'
  },
  {
    id: '3',
    name: 'Mrs. Lynda Heathcote',
    gender: 'Demigender',
    email: 'Alan_Hermiston@gmail.com',
    dob: '1966-07-25',
    phone: '45-745758-772186-1',
    job: 'Lead Infrastructure Analyst'
  },
  {
    id: '4',
    name: 'Angelina Schroeder Sr.',
    gender: 'Transexual person',
    email: 'Ethyl.Kling67@hotmail.com',
    dob: '1955-03-27',
    phone: '32-255450-018979-7',
    job: 'Direct Accounts Assistant'
  },
  { 
    id: '5',
    name: 'Ms. Tonya Kerluke',
    gender: 'Transexual female',
    email: 'Lorena61@gmail.com',
    dob: '2000-06-08',
    phone: '89-774282-757312-5',
    job: 'Global Integration Consultant'
  },
  {
    id: '6',
    name: 'Kent Krajcik',
    gender: 'Female to male trans man',
    email: 'Abdullah91@gmail.com',
    dob: '1997-01-05',
    phone: '26-580999-215751-5',
    job: 'Internal Functionality Designer'
  },
  {
    id: '7',
    name: 'Travis Price-Zulauf',
    gender: 'M2F',
    email: 'Ena.Prosacco@yahoo.com',
    dob: '1973-01-19',
    phone: '55-198007-364352-6',
    job: 'Customer Configuration Manager'
  },
  {
    id: '8',
    name: 'Marty Littel',
    gender: 'Man',
    email: 'Melyssa.Simonis94@gmail.com',
    dob: '1978-04-13',
    phone: '01-440784-567167-7',
    job: 'Internal Tactics Agent'
  },
  {
    id: '9',
    name: 'Evan Prosacco',
    gender: 'Female to male',
    email: 'Kobe.Blick6@yahoo.com',
    dob: '1949-03-30',
    phone: '74-820285-538981-2',
    job: 'District Security Designer'
  },
  {
    id: '10',
    name: 'Heather Smith',
    gender: 'Intersex woman',
    email: 'Delilah3@hotmail.com',
    dob: '1996-10-30',
    phone: '82-407941-114310-8',
    job: 'Lead Creative Representative'
  }
  ];

// Create a Class that is used as a template for adding new records.

class PatientRecord {
  constructor(id, name, gender, email, dob, phone, job) {
    this.id = id;
    this.name = name;
    this.gender = gender;
    this.email = email;
    this.dob = dob;
    this.phone = phone;
    this.job = job;
  }
}