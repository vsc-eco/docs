---
title: Remitentes y destinatarios
sidebar:
  order: 5
---

*Transferencia de valor sin comisiones a través de la asignación de activos nativos dentro de VSC.*

Los **remitentes y destinatarios** son usuarios que utilizan VSC para enviar valor **entre direcciones de billeteras en diferentes _blockchain_ que están conectadas a VSC**, como por ejemplo, enviar BTC a una dirección de billetera Ethereum, sin necesidad de utilizar puentes *(bridges)* tradicionales, intercambios *(swaps)* o fondos de liquidez. Todo esto sucede **dentro de VSC**, utilizando su sistema de contabilidad interno y la abstracción de la capa de billetera *(wallet-layer abstraction)*, impulsado por la **asignación de activos nativos**.

### Lo que permite la Asignación de Activos Nativos

La **asignación de activos nativos** es el mecanismo de VSC para vincular direcciones de billetera en diferentes *blockchains* y permitir la transferencia de los respectivos activos nativos entre esas billeteras. Permite a los usuarios:

- Conectar billeteras de diferentes *blockchains* (BTC, ETH, SOL, etc.) a VSC.
- Enviar activos nativos (por ejemplo, BTC) a una dirección de billetera conectada y asociada con otra *blockchain* (por ejemplo, una billetera ETH).
- Recibir activos nativos.

El remitente paga una comisión de red única para depositar el activo en VSC; el protocolo gestiona el cambio en el libro de contabilidad interno, y el destinatario puede enviar ese activo a cualquier otra dirección de billetera conectada a VSC.

### Características clave de esta función

- **Movimiento de valor a nivel de protocolo** – sin puentes o intermediarios externos.
- **Recibir BTC nativo en una billetera ETH conectado** (y viceversa).
- **Los usuarios pagan una comisión solo al depositar o retirar fondos de VSC;** todas las transferencias internas entre billeteras conectadas son **sin comisiones** (las transferencias dentro de VSC son sin comisiones).
- **Los destinatarios deben conectarse a VSC para acceder a los fondos** (el sistema resuelve automáticamente el depósito a su dirección asignada).
- **Los destinatarios pueden retirar fondos después de completar un intercambio *(swap)* al activo de su elección**.
- **Todos los activos permanecen nativos en todo momento**.

### Implicaciones y casos de uso

- **Remesas:** Un usuario en el país A puede enviar BTC directamente a la billetera ETH de alguien en el país B.
- **Pagos:** Los clientes pueden pagar con la dirección de billetera que posean; los comerciantes reciben el pago en la dirección de billetera que tengan sin comisiones dentro de VSC.
- **Abstracción de billetera:** Los usuarios no necesitan saber qué cadena está usando alguien; simplemente envían a su billetera conectado.
- **Simplificación de la experiencia de usuario:** No hay necesidad de hacer intercambios *(swaps)*, usar puentes *(bridges)*, ni siquiera saber qué activo prefiere un destinatario; VSC lo resuelve.
