function calculatorTriangleArea(){

 const baseField = document.getElementById('triangle-base');
const baseValueText = baseField.value;
const base = parseFloat(baseValueText)


const heightField = document.getElementById('triangle-height');
const heightValueText = heightField.value;
const height = parseFloat(heightValueText);


const area = 0.5 * base * height;
const triangleArea = document.getElementById('triangle-area');
triangleArea.innerText = area;

}
function calculatorRectangleArea(){
  const widthField = document.getElementById('rectangle-width');
  const widthValueText = widthField.value;
  const width = parseFloat(widthValueText);
  console.log(width);
  const lengthField = document.getElementById('rectangle-length');
  const lengthValueText = lengthField.value;
  const length = parseFloat(lengthValueText);
  console.log(length);

  const area = width * length;
  const rectangleArea = document.getElementById('rectangle-area');
  rectangleArea.innerText = area;
}