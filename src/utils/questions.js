// last
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

const identityDocument = [
  {
    question: "Who is the policy owner",
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

const proposalDeclined = [
  {
    question: "Give Details",
    nextPull: identityDocument,
  },
];

const beneficiaryContd2 = [
  {
    question:
      "Has any proposal under your life ever been Declined, Postponed, Defferred, Withdrawn, or Accepted on Special Terms.",
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

const beneficiaryHasInsurancePolicy = [
  {
    question: "What is the name of the Insurance Company?",
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

const beneficiaryContd = [
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

const beneficiaryAbove18 = [
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

const beneficiaryBelow18 = [
  {
    question: "Guadian Name",
  },
  {
    question: "Guadian Phone Number",
  },
  {
    question: "Guadian Address",
    nextPull: beneficiaryContd,
  },
];

const beneficiary = [
  {
    question: "Choose Beneficiary",
    options: [
      {
        name: "New Beneficiary",
      },
    ],
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

const doctorDetails = [
  {
    question: "What is the name of your Doctor?",
    nextPull: beneficiary,
  },
];

const medicalDetails = [
  {
    question: "What is your Weight",
  },
  {
    question: "What is your Height?",
  },
  {
    question: "What is your Gender?",
  },
  {
    question:
      "Have you ever suffered from epilepsy, brain tumor or other mental disturbances?",
    options: [
      {
        name: "yes",
      },
      {
        name: "no",
      },
    ],
  },
  {
    question:
      "Have you ever been treated for Tuberculosis, Asthma, Pneumonia or any other chest or heart disease?",
    options: [
      {
        name: "yes",
        nextPull: doctorDetails,
      },
      {
        name: "no",
        nextPull: doctorDetails,
      },
    ],
  },
];

const termsIntro = [
  {
    question: "Select quote options",
    options: [
      {
        name: "I have a target sum assured",
      },
      {
        name: "I have a premium I want to pay",
      },
    ],
  },
  {
    question: "What is your sum Assured",
  },
  {
    question: "Duration in Years",
  },
  {
    question: "What is your Date of Birth",
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
  },
  {
    question: "What is your Firstname",
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
  },
  {
    question: "A mail is on it’s way to your inbox",
    questionDescription: "Check t*****ft8@gmail.com",
    nextPull: medicalDetails,
  },
];

export const intro = [
  {
    question: "What Type of plan would you like to buy?",
    options: [
      {
        name: "Term",
        nextPull: termsIntro,
      },
      {
        name: "Education Endowment",
      },
    ],
  },
];
