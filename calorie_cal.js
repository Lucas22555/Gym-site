function calculateCalories() {
  var gender = document.getElementById("gender").value;
  var weight = Number(document.getElementById("weight").value);
  var height = Number(document.getElementById("height").value);
  var age = Number(document.getElementById("age").value);
  var activityLevel = document.getElementById("activityLevel").value;
  var goal = document.getElementById("goal").value;

  var bmr;
  if (gender === "male") {
    bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
  } else {
    bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
  }

  var totalCalories;
  if (activityLevel === "sedentary") {
    totalCalories = bmr * 1.2;
  } else if (activityLevel === "lightlyActive") {
    totalCalories = bmr * 1.375;
  } else if (activityLevel === "moderatelyActive") {
    totalCalories = bmr * 1.55;
  } else if (activityLevel === "veryActive") {
    totalCalories = bmr * 1.725;
  } else {
    totalCalories = bmr * 1.9;
  }

  var resultElement;
  if (goal === "bulking") {
    resultElement = "Daily Calories for Bulking: " + Math.round(totalCalories * 1.1);
  } else {
    resultElement = "Daily Calories for Cutting: " + Math.round(totalCalories * 0.9);
  }
  document.getElementById("result").innerHTML = resultElement;
}