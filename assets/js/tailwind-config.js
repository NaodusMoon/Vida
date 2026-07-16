tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        crema: {
                            light: '#FDFBF7',    // Crema muy suave de fondo principal
                            DEFAULT: '#F4EAE1',  // Crema intermedio para secciones
                            dark: '#E2D4C5',     // Crema más oscuro para sombreados y tarjetas
                            accent: '#D0BCAC'    // Crema fuerte para contraste de bordes
                        },
                        vinotinto: {
                            light: '#A65B65',    // Vino tinto suave para textos secundarios y detalles
                            DEFAULT: '#832C35',  // Vino tinto clásico para botones y énfasis principal
                            dark: '#4E1218',     // Vino tinto profundo para títulos y texto de alto contraste
                        },
                        textdark: '#2B1A1D',     // Color de texto ultra oscuro cálido
                        softgray: '#5C5052'      // Gris cálido suave
                    },
                    fontFamily: {
                        sans: ['Montserrat', 'sans-serif'],
                        display: ['Space Grotesk', 'sans-serif'],
                    }
                }
            }
        }
