---
title: Moneda estable (HBD) como activo base
sidebar:
  order: 6
---

VSC emplea Hive Backed Dollars (HBD), una moneda estable algorítmica, como el activo base en todos los fondos de liquidez. Este diseño estandariza las rutas de enrutamiento, simplifica el suministro de liquidez y reduce la exposición al riesgo debido a que todos los fondos solo tienen volatilidad de un solo lado. Al usar HBD como par común, los proveedores de liquidez solo están expuestos al rendimiento de su activo volátil elegido, emparejado con HBD. Esto resulta en una cartera que refleja el rendimiento del único activo volátil en lugar de múltiples fuentes de volatilidad de precios, mejorando la previsibilidad y la gestión del riesgo.

## Fundamentos del diseño

### Suministro de liquidez simplificado

Al emparejar cada activo frente a HBD, VSC reduce la complejidad del suministro de liquidez. Los proveedores de liquidez solo necesitan aportar HBD y un único activo adicional, lo que disminuye la barrera de entrada y concentra la liquidez de manera más efectiva.

### Enrutamiento eficiente

El uso de HBD como intermediario universal permite intercambios de activos de forma sencilla. Por ejemplo, el intercambio de **Activo A** por **Activo B** implica dos pasos: `Activo A → HBD → Activo B`. Esto reduce el número total de fondos requeridos de O(n²) a O(n), donde *n* es el número de activos, mejorando la eficiencia del capital y la simplicidad del enrutamiento.


| Número de activos (ej. BTC, ETH, HIVE) | Fondos requeridos (pares arbitrarios) | Fondos requeridos (activo base HBD) |
|----------------------------------------|---------------------------------------|-------------------------------------|
| n                                      | fondos = n * (n - 1) / 2              | n  = fondos                         |
| 12                                     | 66                                    | 12                                  |
| 36                                     | 630                                   | 36                                  |
| 100                                    | 4,950                                 | 100                                 |


### Estabilidad y previsibilidad

El HBD está diseñado para mantener un valor estable, lo que proporciona una base predecible para los fondos de liquidez. Esta estabilidad reduce la exposición a las perturbaciones de volatilidad que se observan a menudo en los sistemas que utilizan *tokens* volátiles como pares base, protegiendo a los proveedores de liquidez y a los traders de las fluctuaciones repentinas de precios.

- **Reducción de la fragmentación del fondo:** Emparejar activos con HBD disminuye el número de fondos de liquidez necesarios, lo que puede ayudar a concentrar la liquidez y mejorar la eficiencia del capital.

- **Fijación de precios simplificada:** La fijación de precios es más sencilla cuando se basa en un activo estable, ya que depende principalmente del valor relativo entre HBD y el activo emparejado.

---

## Consideraciones

- **Profundidad de Liquidez:** Mantener suficiente liquidez de HBD es esencial para garantizar intercambios eficientes y reducir el deslizamiento en todo el ecosistema.
- **Mantenimiento de la paridad de la moneda estable:** La efectividad de este modelo se basa en que el HBD mantenga su paridad. La *blockchain* de Hive incluye mecanismos integrados y múltiples salvaguardas diseñadas para monitorear y preservar la estabilidad del HBD a lo largo del tiempo.
- **Compatibilidad entre cadenas _(Cross-Chain)_:** El soporte para activos de otras *blockchains* depende del desarrollo y la implementación de bóvedas específicas e integraciones de validadores para cada cadena, lo que permite su emparejamiento seguro con HBD.
