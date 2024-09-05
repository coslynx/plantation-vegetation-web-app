const isEmpty = (value) => {
  if (value === null || value === undefined) {
    return true;
  }
  if (typeof value === 'string' && value.trim() === '') {
    return true;
  }
  if (Array.isArray(value) && value.length === 0) {
    return true;
  }
  return false;
};

const isEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const isPasswordValid = (password) => {
  // Check for minimum length and complexity (optional)
  return password.length >= 8;
};

const isPhoneNumberValid = (phoneNumber) => {
  // Validate phone number format based on country code (optional)
  return true;
};

const isUrlValid = (url) => {
  try {
    new URL(url);
    return true;
  } catch (error) {
    return false;
  }
};

const isDateValid = (date) => {
  if (isEmpty(date)) {
    return false;
  }
  const dateObject = new Date(date);
  return !isNaN(dateObject.getTime());
};

const isLocationValid = (location) => {
  // Validate location format based on specific requirements (optional)
  return true;
};

const isPlantNameValid = (name) => {
  return !isEmpty(name);
};

const isPlantScientificNameValid = (name) => {
  return !isEmpty(name);
};

const isPlantFamilyValid = (name) => {
  return !isEmpty(name);
};

const isPlantNativeRegionValid = (name) => {
  return !isEmpty(name);
};

const isPlantImageValid = (image) => {
  return isUrlValid(image);
};

const isPlantDescriptionValid = (description) => {
  return !isEmpty(description);
};

const isPlantingTechniquesValid = (techniques) => {
  return !isEmpty(techniques);
};

const isCareRequirementsValid = (requirements) => {
  return !isEmpty(requirements);
};

const isEnvironmentalBenefitsValid = (benefits) => {
  return !isEmpty(benefits);
};

const isProjectNameValid = (name) => {
  return !isEmpty(name);
};

const isProjectDescriptionValid = (description) => {
  return !isEmpty(description);
};

const isProjectLocationValid = (location) => {
  return !isEmpty(location);
};

const isProjectPlantSpeciesValid = (species) => {
  return !isEmpty(species);
};

const isProjectTeamMembersValid = (members) => {
  return Array.isArray(members) && members.length > 0;
};

const isProjectStartDateValid = (date) => {
  return isDateValid(date);
};

const isProjectEndDateValid = (date) => {
  return isDateValid(date);
};

const isResourceNameValid = (name) => {
  return !isEmpty(name);
};

const isResourceDescriptionValid = (description) => {
  return !isEmpty(description);
};

const isResourceLinkValid = (link) => {
  return isUrlValid(link);
};

const isFundingNameValid = (name) => {
  return !isEmpty(name);
};

const isFundingDescriptionValid = (description) => {
  return !isEmpty(description);
};

const isFundingLinkValid = (link) => {
  return isUrlValid(link);
};

const isForumTitleValid = (title) => {
  return !isEmpty(title);
};

const isForumContentValid = (content) => {
  return !isEmpty(content);
};

const isForumAuthorIdValid = (authorId) => {
  return !isEmpty(authorId);
};

export {
  isEmpty,
  isEmail,
  isPasswordValid,
  isPhoneNumberValid,
  isUrlValid,
  isDateValid,
  isLocationValid,
  isPlantNameValid,
  isPlantScientificNameValid,
  isPlantFamilyValid,
  isPlantNativeRegionValid,
  isPlantImageValid,
  isPlantDescriptionValid,
  isPlantingTechniquesValid,
  isCareRequirementsValid,
  isEnvironmentalBenefitsValid,
  isProjectNameValid,
  isProjectDescriptionValid,
  isProjectLocationValid,
  isProjectPlantSpeciesValid,
  isProjectTeamMembersValid,
  isProjectStartDateValid,
  isProjectEndDateValid,
  isResourceNameValid,
  isResourceDescriptionValid,
  isResourceLinkValid,
  isFundingNameValid,
  isFundingDescriptionValid,
  isFundingLinkValid,
  isForumTitleValid,
  isForumContentValid,
  isForumAuthorIdValid,
};