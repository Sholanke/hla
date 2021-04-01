export const chooseIdentityType = [
  {
    question: "Choose your Identity Type",
    options: [
      {
        name: "BVN",
      },
      {
        name: "Driver's License",
      },
      {
        name: "NIN",
      },
      {
        name: "Others",
      },
    ],
  },
  {
    question: "Whats is your Firstname?",
  },
  {
    question: "Whats is your Lastname?",
  },
  {
    question: "Whats is your Phone Number?",
  },
  {
    question: "Whats is your Date of Birth?",
  },
  {
    question: "Whats is your Gender?",
  },
  {
    question: "Whats is Occupation",
    isLastQuestion: true,
  },
];

export const identityDocument = [
  {
    question: "Who is the policy owner",
    appHeader: "Identity Document",
    options: [
      {
        name: "Name of Insured Person",
      },
      {
        name: "My self",
      },
      {
        name: "New customer",
        nextPull: chooseIdentityType,
      },
    ],
  },
];

export const proposalDeclined = [
  {
    question: "Give Details",
    appHeader: "PenCom",
    nextPull: identityDocument,
  },
];

export const beneficiaryContd2 = [
  {
    question:
      "Has any proposal under your life ever been Declined, Postponed, Defferred, Withdrawn, or Accepted on Special Terms.",
    appHeader: "Beneficiary",
    options: [
      {
        name: "Yes",
        nextPull: proposalDeclined,
      },
      {
        name: "No, continue",
        nextPull: identityDocument,
      },
    ],
  },
];

export const beneficiaryHasInsurancePolicy = [
  {
    question: "What is the name of the Insurance Company?",
    appHeader: "PenCom",
  },
  {
    question: "Insurance Policy Number",
  },
  {
    question: "Sum Assured",
  },
  {
    question: "Would you like to add another one?",
    options: [
      {
        name: "Yes",
        // nextPull : beneficiaryContd,
      },
      {
        name: "No, continue",
        nextPull: beneficiaryContd2,
      },
    ],
  },
];

export const beneficiaryContd = [
  {
    question: "Do you have an existing Insurance Policy?",
    options: [
      {
        name: "yes",
        nextPull: beneficiaryHasInsurancePolicy,
      },
      {
        name: "no",
        nextPull: beneficiaryContd2,
      },
    ],
  },
];

export const beneficiaryAbove18 = [
  {
    question: "Name of beneficiary",
  },
  {
    question: "Beneficiary's phone number",
  },
  {
    question: "Relationship with Asssured",
  },
  {
    question: "%share",
    nextPull: beneficiaryContd,
  },
];

export const beneficiaryBelow18 = [
  {
    question: "Guardian's Name",
  },
  {
    question: "Guardian's Phone Number",
  },
  {
    question: "Guardian's Address",
    nextPull: beneficiaryContd,
  },
];

export const beneficiary = [
  {
    question: "Choose Beneficiary",
    appHeader: "Beneficiary",
    options: [
      {
        name: "New Beneficiary",
      },
    ],
    // /GET ​/beneficiary
  },
  {
    question: "How old is your Benficiary",
    options: [
      {
        name: "Above 18",
        nextPull: beneficiaryAbove18,
      },
      {
        name: "Below 18",
        nextPull: beneficiaryBelow18,
      },
    ],
  },
];

export const doctorDetails = [
  {
    question: "What is the name of your Doctor?",
    appHeader: "Doctor Details",
  },
  {
    question: "What is the name of the Hospital?",
  },
  {
    question: "What is the Hosptial's Address?",
  },
  {
    question: "Doctors Phone Number",
  },
  {
    question: "How long have you been a patient to this Doctor?",
  },
  {
    question: "Capture Insured Image",
    options: [
      {
        name: "open camera",
        nextPull: beneficiary,
      },
    ],
  },
];

export const medicalDetails = [
  {
    question: "What is your Weight",
    appHeader: "Health Form",
  },
  {
    question: "What is your Height?",
  },
  {
    question: "What is your Gender?",
    options: [
      {
        name: "Male",
      },
      {
        name: "Female",
      },
    ],
  },
  {
    question:
      "Have you ever suffered from epilepsy, brain tumor or other mental disturbances?",
    options: [{ name: "yes" }, { name: "no" }],
    // neuralIssues
  },
  {
    question:
      "Have you ever been treated for Tuberculosis, Asthma, Pneumonia or any other chest or heart disease?",
    options: [{ name: "yes" }, { name: "no" }],
  },
  {
    question:
      "Have you ever suffered from any infection of the kidney, liver, urinary organs, blood in urine or any form of cancer?",
    options: [{ name: "yes" }, { name: "no" }],
  },
  {
    question:
      "Have you ever been diagnosed, counselled or treated in connection with sexually transmitted diseases, including syphillis, HIV(AIDS), Hepatitis B/C or Herpes?",
    options: [{ name: "yes" }, { name: "no" }],
  },

  {
    question:
      "Do you have any pre-existing conditions or suffered from any other illness, disorder, diseases not mentioned above?",
    options: [{ name: "yes" }, { name: "no" }],
  },

  {
    question:
      "Have you any disability or any previous accident or undergone any operation?",
    options: [{ name: "yes" }, { name: "no" }],
  },

  {
    question: "Do you have consume alcohol?",
    options: [{ name: "yes" }, { name: "no" }],
  },

  {
    question: "How many litres?",
  },

  {
    question: "Do you consume tobacco?",
    options: [{ name: "yes" }, { name: "no" }],
  },

  {
    question: "How many sticks?",
  },

  {
    question: "Are you currently Pregnant?",
    options: [{ name: "yes" }, { name: "no" }],
  },

  {
    question: "When is your expected delivery date?",
    nextPull: doctorDetails,
  },

  // respiratoryIssues
];

export const termsIntroContd = [
  {
    question: "Duration in Years",
  },
  {
    question: "Your Quoted Premium is:",
    options: [
      {
        name: "Monthly",
      },
      {
        name: "Quarterly",
      },
    ],
    // call /user/signup
  },
  {
    question: "A mail is on it’s way to your inbox",
    questionDescription: "Check t*****ft8@gmail.com",
    nextPull: medicalDetails,
  },
];

export const premiumAndWantToPay = [
  {
    question: "What is the Premium you want to pay?",
    nextPull: termsIntroContd,
  },
];

export const targetSumAssured = [
  {
    question: "What is your sum Assured",
    nextPull: termsIntroContd,
  },
];

export const termsIntro = [
  {
    question: "Select quote options",
    appHeader: "Term",
    options: [
      {
        name: "I have a target sum assured",
        nextPull: targetSumAssured,
      },
      {
        name: "I have a premium I want to pay",
        nextPull: premiumAndWantToPay,
      },
    ],
  },
];

export const userDetailQuestions = [
  {
    question: "What is your Firstname",
    appHeader: "Let's get to know you",
  },
  {
    question: "What is your Lastname",
  },
  {
    question: "What is your Email Address",
  },
  {
    question: "What is your Date of Birth",
  },
  {
    question: "What is your Phone Number",
  },
  {
    question: "What is your Occupation",
    nextPull: termsIntro,
  },

  // validate otp
  // /insured-person
  // uuid gen v4
];

export const intro = [
  {
    question: "What Type of plan would you like to buy?",
    appHeader: "Buy Assurance",
    options: [
      {
        name: "Term Assurance",
        nextPull: userDetailQuestions,
      },
      {
        name: "Education Endowment",
      },
    ],
  },
];
