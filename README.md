# Simulador de Sobres Digimon TCG

**Digimon TCG Booster Simulator**

🇪🇸 Proyecto personal que simula la experiencia de abrir sobres de cartas Digimon TCG con mecánicas de rareza realistas.  
🇬🇧 Personal project simulating the experience of opening Digimon TCG boosters with authentic rarity mechanics.

---

## 🧩 ¿Qué es este proyecto? / What is this project?

🇪🇸 Simulador interactivo que replica la distribución de cartas (C/U/R/SR/SEC) del set BT-21 ("World Convergence"). Incluye:

- Animaciones CSS al abrir sobres
- Visualización detallada de cada carta
- Diseño responsive (mobile/desktop)
- JSON local con todas las cartas

🇬🇧 Interactive simulator replicating the card distribution (C/U/R/SR/SEC) from BT-21 ("World Convergence"). Features:

- CSS animations when opening packs
- Detailed card viewer
- Responsive design
- Local JSON database

---

## ⚙️ Instalación / Installation

```bash
git clone https://github.com/iriavidal/simulador-digimon.git
cd simulador-digimon
npm install
npm start
```

🇪🇸 Abre http://localhost:4200 en tu navegador.

🇬🇧 Open http://localhost:4200 in your browser.

---

## 🚀 Cómo usar / How to use

🇪🇸

1. Haz clic en "Abrir sobre"

2. Descubre tus cartas (7 comunes, 3 poco comunes, 1 rara + especial)

3. Haz clic en cualquier carta para ampliarla

🇬🇧

1. Click "Open booster"

2. Discover your cards (7 commons, 3 uncommons, 1 rare + special)

3. Click any card to zoom

---

## 🛠️ Tecnologías / Technologies

- Angular 19

- Angular Material CDK

- CSS Variables + Animaciones

- JSON estático (optimizado para carga rápida)

---

## 🏗️ Arquitectura del Proyecto / Project Architecture

### 🇪🇸 **Estrategia de Datos**

#### ¿Por qué JSON estático?

✅ **Control completo**  
Los datos de cartas necesitan metadatos específicos que no están disponibles en APIs públicas o requieren múltiples llamadas.

✅ **Rendimiento optimizado**

- Carga instantánea (sin latencia de red)
- No hay sobrecarga de conexión a base de datos
- Ideal para el patrón offline-first

✅ **Mantenimiento simple**

- Los datos de cartas son estáticos (no cambian)
- Fácil de actualizar manualmente cuando salen nuevos sets
- No requiere backend complejo

```json
// Ejemplo de estructura optimizada
{
  "name": "Gigimon",
  "id": "BT21-001",
  "imageUrl": "https://world.digimoncard.com/images/cardlist/card/BT21-001.png",
  "rarity": "C",
  "alternative": false
}
```

### 🇬🇧 Data Strategy

#### Why Static JSON?

✅ **Full Control**  
Card metadata requires specific fields not provided by public APIs.

✅ **Peak Performance**

- Instant loading (no network latency)
- No database connection overhead
- Perfect for offline-first pattern

✅ **Easy Maintenance**

- Card data is static (won't change)
- Simple manual updates for new sets
- No complex backend needed

---

## 🤝 Contribuciones / Contributions

🇪🇸 ¡Cualquier sugerencia, mejora o reporte de errores es más que bienvenida!
Puedes abrir una **issue**, enviar un **pull request** o simplemente dejar un comentario.

🇬🇧 Any suggestions, improvements, or bug reports are more than welcome!
Feel free to open an **issue**, submit a **pull request**, or leave a comment.

---

## 👩‍💻 Autora / Author

**Iria Vidal**

🚧 Portfolio en desarrollo | Coming soon

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/iria-vidal/)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github)](https://github.com/iriavidal)

💻 Desarrolladora Frontend | Angular Specialist  
🎨 UX/UI Enthusiast | CSS Art Lover

---

## 🪪 Licencia

🇪🇸 Este proyecto está bajo la licencia [CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/deed.es), lo que significa que puedes usarlo, copiarlo, modificarlo y compartirlo libremente **siempre que no tenga fines comerciales** y se dé el crédito correspondiente.
No está permitido revender el código ni utilizarlo en productos o servicios de pago.

🇬🇧 This project is licensed under the [CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/), which means you are free to use, copy, modify, and share it **as long as it is not for commercial purposes** and proper credit is given.
Reselling the code or using it in paid products or services is not allowed.

---
