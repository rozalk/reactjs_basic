console.log("Hello world");

const tempConverter = () => {
  const temp = Number(document.getElementById("temp").value);
  const tempIn = document.querySelector('input[name="type"]:checked').value;

  if (tempIn == "f") {
    const fahrenheit = (9 * temp) / 5 + 32;
    console.log(`The temp is ${fahrenheit}`);
    document.getElementById("tempresult").innerHTML = fahrenheit;
  } else {
    const celsius = ((temp - 32) * 5) / 9;
    console.log(`The temp is ${celsius}`);
    document.getElementById("tempresult").innerHTML = celsius;
  }
};
