import React, { useContext } from "react";
import { ThemeContext } from "../App";

const Content = () => {
  const theme = useContext(ThemeContext);
  return (
    <div style={theme}>
      <h3>Birinci Yöntem</h3>
      <p>Bu create context api yönteminde:</p>
      <p>
        Birinci adımda App.js dosyasında css özelliklerinin tanımlandığı themes
        const'ı oluşturuldu.
      </p>
      <p>
        İkinci adımda App.js dosyasında ThemeContext ismiyle yeni bir
        createContext const'ı oluşturuldu. Başlangıç değeri olarak oluşturulan
        themes const'ının dark css özellikleri veridi.
      </p>
      <p>
        Üçüncü adımda App.js dosyasında useState yöntemiyle theme adıyla bir
        değişken oluşturuldu ve bu değişkenin başlangıç değerine themes
        const'ının dark css özellikleri verildi.
      </p>
      <p>
        Dördüncü adımda App.js dosyasında Content sayfamız oluşturduğumuz
        ThemeContext const'ı ile sarmallandı. Ve Provider ile sarmalladığımız
        sayfamıza tema değerlerimizin aktarımı başlatıldı.
      </p>
      <p>Beşinci adımda ise Content.js sayfamızda bu değerler kullanıldı. </p>
    </div>
  );
};

export default Content;
