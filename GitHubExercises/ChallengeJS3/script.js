// Remember, we're gonna use strict mode in all scripts now!
'use strict';



/*const temperatures = [3, -2, -6, -6, 'error', 9, 13, 17, 15, 14, 9, 5];

const calcTempAmplitude = function(temps){

    let max = temps[0]
    let min = temps[0]

    for(let i = 0; i < temps.length; i++){
        const curTemp = temps[i];

        if(typeof curTemp !== 'number') continue;


        if(temps[i] > max) max = temps[i];
        if(temps[i] < min) min = temps[i];
    }
    console.log(max, min)

    return max - min
}

  const amplitude = calcTempAmplitude(temperatures)

  console.log(amplitude)

  const temperatures = [3, -2, -6, -6, 'error', 9, 13, 17, 15, 14, 9, 5];

const calcTempAmplitude = function(t1, t2){

    const temps = t1.concat(t2);
    console.log(temps)

    let max = temps[0]
    let min = temps[0]

    for(let i = 0; i < temps.length; i++){
        const curTemp = temps[i];

        if(typeof curTemp !== 'number') continue;


        if(temps[i] > max) max = temps[i];
        if(temps[i] < min) min = temps[i];
    }
    console.log(max, min)

    return max - min
}

  const amplitude = calcTempAmplitude([0, 5, 10], [15, 20, 30])

  console.log(amplitude)


  const measureKelvin = function(){
    const measure = {
        type: 'temp',
        unit: 'celsius',
        // value: Number(prompt('Degress Celsius: '))
    };

    console.log(measure)
    console.log(measure.value)


    const kelvin = measure.value + 273;
    return kelvin;

  };

  //passo 1, identificar o bug
  console.log(measureKelvin());

//DEBUGGER
  const calcTempAmplitude = function(t1, t2){

    const temps = t1.concat(t2);
    console.log(temps)

    let max = temps[0]
    let min = temps[0]

    for(let i = 0; i < temps.length; i++){
        const curTemp = temps[i];

        if(typeof curTemp !== 'number') continue;


        if(temps[i] > max) max = temps[i];
        if(temps[i] < min) min = temps[i];
    }
    console.log(max, min)

    return max - min
}

  const amplitude = calcTempAmplitude([3, 5, 10], [15, 20, 30])

  console.log(amplitude)

const temperatures = [3, -2, -6, -6, 'error', 9, 13, 17, 15, 14, 9, 5];

const calcTempAmplitude = function(temps){

    let max = temps[0]
    let min = temps[0]

    for(let i = 0; i < temps.length; i++){
        const curTemp = temps[i];
        if(typeof curTemp !== 'number') continue;


        if(temps[i] > max) max = temps[i];
        if(temps[i] < min) min = temps[i];
    }
    console.log(max, min)

    return max - min
}

  const amplitude = calcTempAmplitude(temperatures)

  console.log(amplitude)

  //passo 1: organizar a função
  const arr = [12, 5, -5, 0, 4]
  // const days = [0]


  const printForecast = function(tempReceptor,){

      let arr = tempReceptor[0];
      let day = 1;
      let result = ''; 

      // let arrayHelper;
      // let dayHelper;

      for(let i = 0; i < tempReceptor.length; i++){

        const arr = tempReceptor[i];
        // const day = daysReceptor[i]
        result += (`${arr} day ${day++} ... `)
      }

      console.log(result)
      return arr;
  }


  printForecast(arr)*/