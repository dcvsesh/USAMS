import cableShadow100w from "../images/cableshadow.jpg"
import audifonodeportivo from "../images/audifonodeportivo.jpg"
import audifonoearbuds from "../images/audifonoearbuds.jpg"
import bateriaportatil from "../images/bateriaportatil.jpg"
import bolsaprotectora from "../images/bolsaprotectora.jpg"
import cable100wpd from "../images/cable100wpd.jpg"
import cablepd60w from "../images/cablepd60w.jpg"
import cargadorauto from "../images/cargadorauto.jpg"
import cargadorparedtypec from "../images/cargadorparedtypec.jpg"
import cargadoparedrapido from "../images/cargadorparedrapido.jpg"
import kitcargadorpared from "../images/kitcargadorpared.jpg"


const allProducts = [
  // ——— CARGA ———
  {
    id: 1,
    category: 'carga',
    name: 'Cable Digital SHADOW Type-C a Type-C 100W 1.2m',
    description: 'Carga súper rápida para tus dispositivos.',
    img: [cableShadow100w, cableShadow100w, cableShadow100w],
    price: '$100.00 mxm',
  },
  {
    id: 2,
    category: 'carga',
    name: 'Cable Celular Type-C a Type-C 100W PD 1.2m U71',
    description: '100W de potencia con diseño premium U71.',
    img: [cable100wpd, cable100wpd, cable100wpd],
    price: '$100.00 mxm',
  },
  {
    id: 3,
    category: 'carga',
    name: 'Cargador Celular Pared + Cable Type-C',
    description: 'Kit completo para carga en pared y en ruta.',
    img: [cargadorparedtypec, cargadorparedtypec, cargadorparedtypec],
    price: '$100.00 mxm',
  },
  {
    id: 4,
    category: 'carga',
    name: 'KIT Cargador Pared PD 20W + Cable Type-C a Type-C 60W',
    description: 'PD20W en pared más cable PD60W para potencia extra.',
    img: [kitcargadorpared, kitcargadorpared, kitcargadorpared],
    price: '$100.00 mxm',
  },
  {
    id: 5,
    category: 'carga',
    name: 'Cargador Pared Ultra Rápido PD 30W',
    description: '30W de carga ultrarrápida para tu dispositivo.',
    img: [cargadoparedrapido, cargadoparedrapido, cargadoparedrapido],
    price: '$100.00 mxm',
  },
  {
    id: 6,
    category: 'carga',
    name: 'Cable Celular Type-C a Type-C PD 60W 1m',
    description: 'Cable PD de 60W para carga estable y segura.',
    img: [cablepd60w, cablepd60w, cablepd60w],
    price: '$100.00 mxm',
  },

  // ——— AUDIO ———
  {
    id: 7,
    category: 'audio',
    name: 'Audífono Deportivo YQ24 BT5.3 Negro',
    description: 'Resistentes al sudor, conexión Bluetooth 5.3.',
    img: [audifonodeportivo,audifonodeportivo,audifonodeportivo],
    price: '$150.00 mxm',
  },
  {
    id: 8,
    category: 'audio',
    name: 'Audífono Earbuds Touch XD18 TWS Bluetooth 5.3',
    description: 'True Wireless Stereo con controles táctiles.',
    img: [ audifonoearbuds,  audifonoearbuds,  audifonoearbuds],
    price: '$120.00 mxm',
  },

  // ——— ACCESORIOS AUTO ———
  {
    id: 9,
    category: 'auto',
    name: 'Cargador Auto Rápido C35 USB + Type-C 45W',
    description: 'Carga rápida 45W para tu vehículo.',
    img: [cargadorauto, cargadorauto, cargadorauto],
    price: '$200.00 mxm',
  },

  // ——— GADGETS ———
  {
    id: 10,
    category: 'gadgets',
    name: 'Bolsa Protectora Celular 6.7″ con marco',
    description: 'Waterproof y con marco para máxima protección.',
    img: [bolsaprotectora, bolsaprotectora, bolsaprotectora],
    price: '$80.00 mxm',
  },
  {
    id: 11,
    category: 'gadgets',
    name: 'Batería Portátil 10,000 mAh US-CD150',
    description: 'Power bank compacto de alta capacidad.',
    img: [bateriaportatil, bateriaportatil, bateriaportatil],
    price: '$250.00 mxm',
  },
];

export default allProducts;