// ——— Imágenes de producto ———
import cableShadow100w from "../images/cableshadow.jpg";
import cable100wpd from "../images/cable100wpd.jpg";
import cargadorparedtypec from "../images/cargadorparedtypec.jpg";
import kitcargadorpared from "../images/kitcargadorpared.jpg";
import cargadoparedrapido from "../images/cargadorparedrapido.jpg";
import cablepd60w from "../images/cablepd60w.jpg";
import audifonodeportivo from "../images/audifonodeportivo.jpg";
import audifonoearbuds from "../images/audifonoearbuds.jpg";
import cargadorauto from "../images/cargadorauto.jpg";
import bolsaprotectora from "../images/bolsaprotectora.jpg";
import bateriaportatil from "../images/bateriaportatil.jpg";

// ——— Iconos de features ———
import rapido from "../images/rapido.png";             // carga rápida
import subir from "../images/subir.png";               // transferencia datos
import escudo from "../images/escudo.png";             // revestimiento / protección
import celular from "../images/celular.png";           // Type-C / puerto
import diamante from "../images/diamante.png";         // diseño
import voltio from "../images/voltio.png";             // pantalla digital / LED
import nube from "../images/almacenamiento.png";       // compatibilidad / ultraligero
import almacen from "../images/almacen.png";           // velcro / almacenamiento
import medida from "../images/medida.png";             // longitud / tamaño
import energia from "../images/energia.png";           // doble puerto / energía
import cartera from "../images/cartera.png";           // chip / certificación
import gota from "../images/gota.png";                 // antideslizante / acuático
import seguridad from "../images/seguridad.png";       // conexión segura / total
import superenergia from "../images/superenergia.png"; // “solución completa”
import bolsa from "../images/bolsa.png";               // portátil / correa
import bateriaIcon from "../images/bateria.png";       // batería
import iman from "../images/iman.png";                 // magnético
import blue from "../images/blue.png";                 // Bluetooth
import touch from "../images/touch.png";               // control táctil
import auto from "../images/auto.png";                 // uso en movimiento
import audifonos from "../images/audifonos.png"; 
import bateria from "../images/bateria.png";        
import carga from "../images/carga.png";     
import compartimiento from "../images/compartimiento.png";      
const allProducts = [
  // ——— 1) Cable Digital SHADOW ———
  {
    id: 1,
    slug: "cable-digital-shadow-type-c-a-type-c-100w-1-2m",
    category: "carga",
    name: "Cable Digital SHADOW Type-C a Type-C 100W 1.2m",
    description:
      "Potencia total y velocidad de transferencia en un solo cable. Ideal para carga rápida de laptops y dispositivos de alto rendimiento.",
    img: [cableShadow100w, cableShadow100w, cableShadow100w],
    price: "$100.00 mxm",
    colors: ["#000000", "#F4F1F1", "#EED7F9"],
    features: [
      { icon: bateriaIcon, label: "100W Carga rápida" },
      { icon: subir,       label: "Transferencia de datos" },
      { icon: almacen,     label: "Revestimiento trenzado duradero" },
      { icon: carga,       label: "Compatible Type-C" },
      { icon: touch,       label: "Pantalla digital" },
      { icon: celular,     label: "Diseño transparente" },
    ],
    additionalImages: [
      cableShadow100w,
      cableShadow100w,
      cableShadow100w,
      cableShadow100w,
    ],
    amazonLink: "https://www.amazon.com.mx",
    mercadoLink: "https://www.mercadolibre.com.mx",
    isNew: true,
  },

  // ——— 2) Cable PD 60W ———
  {
    id: 2,
    slug: "cable-celular-type-c-a-type-c-pd-60w-1m",
    category: "carga",
    name: "Cable Celular Type-C a Type-C PD 60W 1m",
    description:
      "Combina potencia, resistencia y diseño elegante. Perfecto para carga rápida y transferencia de datos, con núcleo de cobre puro para máxima eficiencia.",
    img: [cablepd60w, cablepd60w, cablepd60w],
    price: "$100.00 mxm",
    colors: ["#000000", "#F4F1F1", "#EED7F9"],
    features: [
      { icon: bateriaIcon, label: "Carga rápida PD 60W" },
      { icon: subir,       label: "Transferencia de datos" },
      { icon: almacen,     label: "Revestimiento trenzado duradero" },
      { icon: carga,       label: "Type-C a Type-C (1m)" },
      { icon: diamante,    label: "Diseño elegante" },
      { icon: escudo,      label: "Conexión segura y estable" },
    ],
  additionalImages: [
      cablepd60w,
      cablepd60w,
      cablepd60w,
      cablepd60w,
    ],
    amazonLink: "https://www.amazon.com.mx",
    mercadoLink: "https://www.mercadolibre.com.mx",
      isNew: true,
  },

  // ——— 3) Cable 100W PD U71 ———
  {
    id: 3,
    slug: "cable-celular-type-c-a-type-c-100w-pd-1-2m-u71",
    category: "carga",
    name: "Cable Celular Type-C a Type-C 100W PD 1.2m U71",
    description:
      "Carga eficiente, materiales reforzados y diseño pensado para durar. Soporta hasta 100W con tecnología Power Delivery.",
    img: [cable100wpd, cable100wpd, cable100wpd],
    price: "$100.00 mxm",
    colors: ["#000000", "#F4F1F1", "#EED7F9"],
    features: [
      { icon: bateriaIcon,     label: "100W PD Carga rápida" },
      { icon: subir,           label: "Transferencia de datos (5A)" },
      { icon: almacen,         label: "Revestimiento duradero" },
      { icon: carga,           label: "Compatible universal" },
      { icon: compartimiento,  label: "Velcro para almacenamiento" },
      { icon: medida,          label: "Longitud práctica 1.20 m" },
    ],
    additionalImages: [
      cable100wpd,
      cable100wpd,
      cable100wpd,
      cable100wpd,
    ],
    amazonLink: "https://www.amazon.com.mx",
    mercadoLink: "https://www.mercadolibre.com.mx",
      isNew: true,
  },

  // ——— 4) Cargador Pared + Cable ———
  {
    id: 4,
    slug: "cargador-celular-pared-cable-type-c",
    category: "carga",
    name: "Cargador Celular Pared + Cable Type-C",
    description:
      "Todo lo que necesitas en un solo paquete. Carga rápida y segura con un diseño compacto, ideal para el día a día.",
    img: [cargadorparedtypec, cargadorparedtypec, cargadorparedtypec],
    price: "$100.00 mxm",
    colors: ["#000000", "#F4F1F1"],
    features: [
      { icon: bateriaIcon, label: "Doble puerto 2.1A" },
      { icon: cartera,     label: "Chip inteligente" },
      { icon: seguridad,   label: "Protección de carga" },
      { icon: rapido,      label: "Diseño antideslizante" },
      { icon: almacen,     label: "Cable anti-tirón" },
      { icon: diamante,    label: "Diseño moderno" },
    ],
    additionalImages: [
      cargadorparedtypec,
      cargadorparedtypec,
 cargadorparedtypec,
     cargadorparedtypec
    ],
    amazonLink: "https://www.amazon.com.mx",
    mercadoLink: "https://www.mercadolibre.com.mx",
      isNew: true,
  },

  // ——— 5) KIT PD20W + PD60W ———
  {
    id: 5,
    slug: "kit-cargador-pared-pd-20w-cable-type-c-a-type-c-60w",
    category: "carga",
    name: "KIT Cargador Pared PD 20W + Cable Type-C a Type-C 60W",
    description:
      "Solución completa para carga rápida. Compatible con múltiples dispositivos, con tecnología PD que optimiza tiempos sin dañar la batería.",
    img: [kitcargadorpared, kitcargadorpared, kitcargadorpared],
    price: "$100.00 mxm",
    colors: ["#000000", "#F4F1F1"],
    features: [
      { icon: bateriaIcon,   label: "Carga 20W + cable 60W" },
      { icon: subir,         label: "Sincronización rápida" },
      { icon: almacen,       label: "Revestimiento trenzado" },
      { icon: carga,         label: "Compatibilidad total" },
      { icon: escudo,        label: "Protección avanzada" },
      { icon: superenergia,  label: "Solución completa" },
    ],
    additionalImages: [
    kitcargadorpared,
      kitcargadorpared,
     kitcargadorpared,
  kitcargadorpared
    ],
    amazonLink: "https://www.amazon.com.mx",
    mercadoLink: "https://www.mercadolibre.com.mx",
      isNew: true,
  },

  // ——— 6) Cargador Pared Ultra Rápido PD 30W ———
  {
    id: 6,
    slug: "cargador-pared-ultra-rapido-pd-30w",
    category: "carga",
    name: "Cargador Pared Ultra Rápido PD 30W",
    description:
      "Energía eficiente y compacta. Ideal para cargar celulares, tablets y más en menos tiempo y con total seguridad.",
    img: [cargadoparedrapido, cargadoparedrapido, cargadoparedrapido],
    price: "$100.00 mxm",
    colors: ["#000000"],
    features: [
      { icon: rapido,      label: "30W Power Delivery" },
      { icon: seguridad,  label: "Carga segura" },
      { icon: bolsa,      label: "Portátil y compacto" },
      { icon: cartera,    label: "Certificación CE" },
      { icon: diamante,   label: "Alta calidad" },
      { icon: celular,    label: "Ideal para dispositivos modernos" },
    ],
    additionalImages: [
     cargadoparedrapido,
      cargadoparedrapido,
      cargadoparedrapido,
      cargadoparedrapido
    ],
    amazonLink: "https://www.amazon.com.mx",
    mercadoLink: "https://www.mercadolibre.com.mx",
      isNew: true,
  },

  // ——— 7) Audífono Deportivo ———
  {
    id: 7,
    slug: "audifono-deportivo-yq24-bt5-3-negro",
    category: "audio",
    name: "Audífono Deportivo YQ24 BT5.3 Negro",
    description:
      "Resistentes al sudor, conexión Bluetooth 5.3 y materiales reforzados para durabilidad y confort.",
    img: [audifonodeportivo, audifonodeportivo, audifonodeportivo],
    price: "$150.00 mxm",
    colors: ["#000000"],
    features: [
      { icon: bateriaIcon, label: "Batería 20H" },
      { icon: rapido,       label: "Carga rápida" },
      { icon: iman,         label: "Magnético" },
      { icon: nube,         label: "Ultraligero" },
      { icon: blue,         label: "Bluetooth 5.3" },
      { icon: audifonos,    label: "Diseño deportivo" },
    ],
    additionalImages: [
    audifonodeportivo,
  audifonodeportivo,
  audifonodeportivo,
  audifonodeportivo
    ],
    amazonLink: "https://www.amazon.com.mx",
    mercadoLink: "https://www.mercadolibre.com.mx",
      isNew: false,
  },

  // ——— 8) Audífono Earbuds ———
  {
    id: 8,
    slug: "audifono-earbuds-touch-xd18-tws-bluetooth-5-3",
    category: "audio",
    name: "Audífono Earbuds Touch XD18 TWS Bluetooth 5.3",
    description:
      "True Wireless Stereo con controles táctiles y autonomía extendida para tu día a día.",
    img: [audifonoearbuds, audifonoearbuds, audifonoearbuds],
    price: "$120.00 mxm",
    colors: ["#000000", "#F4F1F1", "#EED7F9"],
    features: [
      { icon: bateriaIcon, label: "6H + 26H batería" },
      { icon: rapido,       label: "Carga rápida" },
      { icon: audifonos,    label: "Sonido 13 mm" },
      { icon: nube,         label: "Ligero y ergonómico" },
      { icon: blue,         label: "Bluetooth 5.3" },
      { icon: touch,        label: "Control táctil" },
    ],
    additionalImages: [
  audifonoearbuds,
   audifonoearbuds,
   audifonoearbuds,
  audifonoearbuds
    ],
    amazonLink: "https://www.amazon.com.mx",
    mercadoLink: "https://www.mercadolibre.com.mx",
      isNew: true,
  },

  // ——— 9) Cargador Auto ———
  {
    id: 9,
    slug: "cargador-auto-rapido-c35-usb-type-c-45w",
    category: "auto",
    name: "Cargador Auto Rápido C35 USB + Type-C 45W",
    description:
      "Carga ultra rápida mientras manejas. Compacto, seguro y con doble salida para mayor eficiencia en el camino.",
    img: [cargadorauto, cargadorauto, cargadorauto],
    price: "$200.00 mxm",
    colors: ["#000000", "#F4F1F1"],
    features: [
      { icon: energia,      label: "Carga 45W" },
      { icon: energia,      label: "Doble carga" },
      { icon: diamante,     label: "Diseño transparente" },
      { icon: cartera,      label: "Certificación CE" },
      { icon: seguridad,    label: "Seguridad total" },
      { icon: auto,     label: "Uso en movimiento" },
    ],
    additionalImages: [
   cargadorauto,
cargadorauto,
cargadorauto,
  cargadorauto
    ],
    amazonLink: "https://www.amazon.com.mx",
    mercadoLink: "https://www.mercadolibre.com.mx",
      isNew: false,
  },

  // ——— 10) Bolsa Protectora ———
  {
    id: 10,
    slug: "bolsa-protectora-celular-6-7-con-marco",
    category: "gadgets",
    name: "Bolsa Protectora Celular 6.7″ con marco",
    description:
      "Protección y estilo en cada detalle. Resistente al agua y al polvo, ideal para llevar tu celular seguro a todos lados.",
    img: [bolsaprotectora, bolsaprotectora, bolsaprotectora],
    price: "$80.00 mxm",
    colors: ["#000000", "#F4F1F1"],
    features: [
      { icon: gota,     label: "IP68 Waterproof" },
      { icon: medida,   label: "Hasta 6.7″" },
      { icon: touch,    label: "Táctil bajo agua" },
      { icon: gota,     label: "Ideal para actividades acuáticas" },
      { icon: bolsa,    label: "Correa desmontable" },
      { icon: escudo,   label: "Protección y tranquilidad" },
    ],
    additionalImages: [
    bolsaprotectora,
   bolsaprotectora,
  bolsaprotectora,
 bolsaprotectora,
    ],
    amazonLink: "https://www.amazon.com.mx",
    mercadoLink: "https://www.mercadolibre.com.mx",
      isNew: true,
  },

  // ——— 11) Batería Portátil ———
  {
    id: 11,
    slug: "bateria-portatil-10000-mah-us-cd150",
    category: "gadgets",
    name: "Batería portátil 10,000 mAh US-CD150",
    description:
      "Potencia que te acompaña. Carga hasta dos dispositivos al mismo tiempo con esta batería ligera, elegante y confiable.",
    img: [bateriaportatil, bateriaportatil, bateriaportatil],
    price: "$100.00 mxm",
    colors: ["#000000", "#F4F1F1", "#EED7F9"],
    features: [
      { icon: energia,  label: "Carga 45W" },
      { icon: energia,  label: "Carga doble" },
      { icon: celular,  label: "Entrada Micro/Type-C" },
      { icon: voltio,   label: "LED indicador" },
      { icon: bolsa,    label: "Con cordón" },
      { icon: bolsa,    label: "Portátil y compacto" },
    ],
    additionalImages: [
    bateriaportatil,
  bateriaportatil,
bateriaportatil,
bateriaportatil,
    ],
    amazonLink: "https://www.amazon.com.mx",
    mercadoLink: "https://www.mercadolibre.com.mx",
      isNew: false,
  },
];

export default allProducts;