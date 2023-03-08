export const Test = () => {
  const text = "кит на море романтик";

  const handelCompare = () => {
    const nb =
      text.split("").reverse().join("").replace(/ /g, "").toLowerCase() ===
      text.split("").join("").replace(/ /g, "").toLowerCase();
    console.log(nb);

    const getMinMax = (arr) => {
      let max = arr[0],
        min = arr[0];
      for (let i = 1; i < arr.length; ++i) {
        if (min > arr[i]) min = arr[i];
        if (max < arr[i]) max = arr[i];
      }
      console.log(max);
      console.log(min);
    };

    getMinMax([1, 3, 55, 2, 65, 97]);

    //     const getArr = (number) => {
    //       const arr = [];
    //       for (let i = 0; i <= number; i += 1) {
    //         if(i % 3 === 0 ){arr.push(i) }
    //       }

    //       return arr;
    //     };
    //     getArr(15);
    //   };
    //   return <p onClick={handelCompare}>{text} </p>;
    // };

    // Написати функцію, яка приймає число і повертає масив який містить усі числа до даного числа які діляться на 3 або мають у собі 3.
    // const getArr = (number) => {
    //   // ваш код
    // };

    // Формулировка
    // Есть реализация компонента, от которого требуется 2 вещи:

    // 1) выводить текущее значение вертикального скролла окна (window.scrollY)

    // 2) после монтирования асинхронно получить число и вывести его
    // import React, { useState, useEffect } from "react";

    // const fetchRandomNumber = () => Promise.resolve(Math.random());

    // export const Test = () => {
    //   const [number, setNumber] = useState();
    //   const [scroll, setScroll] = useState(window.scrollY);

    //   useEffect(() => {
    //     fetchRandomNumber().then(setNumber);
    //     const handleScroll = () => setScroll(window.scrollY);
    //     window.addEventListener("scroll", handleScroll);

    //     return () => window.removeEventListener("scroll", handleScroll);
    //   }, []);
    //   return (
    //     <div>
    //       <div> Number: {number} </div>
    //       <div> Scroll: {scroll} </div>
    //     </div>
    //   );
    // };
    // как выше хорошо- как ниже совсем круто//

    // import React, { useState, useEffect } from "react";
    // import throttle from "lodash/throttle";

    // const fetchRandomNumber = () => Promise.resolve(Math.random());

    // // получение window.scrollY вынесли в функцию
    // const getWindowScrollY = () => window.scrollY;
    // const useWindowScrollY = () => {
    //   const [scroll, setScroll] = useState(getWindowScrollY);

    //   useEffect(() => {
    //     const handleScroll = throttle(() => setScroll(window.scrollY), 37);

    //     window.addEventListener("scroll", handleScroll);

    //     return () => window.removeEventListener("scroll", handleScroll);
    //   }, []);

    //   return scroll;
    // };

    // export const Test = () => {
    //   const [number, setNumber] = useState();
    //   const scroll = useWindowScrollY();

    //   useEffect(() => {
    //     fetchRandomNumber().then(setNumber);
    //   }, []);

    //   return (
    //     <div>
    //       <div> Number: {number} </div>
    //       <div> Scroll: {scroll} </div>
    //     </div>
    //   );
  };
};
