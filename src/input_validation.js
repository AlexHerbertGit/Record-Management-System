//function that checks the input query and validates that it is a correct input for the data types in the records object.

function validateInput(field, value) {
    switch (field) {
      case 'id':
        // Validates ID format (integer)
        if (!Number.isInteger(Number(value))) {
          return 'id';
        }
        break;
      case 'name':
      case 'gender':
      case 'job':
        // Validates the name, gender, and job fields as they all require the same format (no numbers or special characters)
        if (!/^[A-Za-z\s]+$/.test(value)) {
          return field;
        }
        break;
      case 'email':
        // Validate the email formatting
        if (!/\S+@\S+\.\S+/.test(value)) {
          return 'email';
        }
        break;
      case 'dob':
        // Validate date of birth format (YYYY-MM-DD)
        if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) {
          return 'dob';
        }
        break;
      case 'phone':
        // Validate phone number formatting.
        if (!/^\d{10}$/.test(value)) {
          return 'phone';
        }
        break;
      default:
        // Handles unrecognizable fields
        break;
    }
    return '';
  }
 