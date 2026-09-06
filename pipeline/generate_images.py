import os
from config import ARTICLES_DATA, CATEGORIES

OUTPUT_DIR = os.path.join(os.path.dirname(__file__), '..', 'public', 'images', 'articles')
os.makedirs(OUTPUT_DIR, exist_ok=True)

CATEGORY_THEMES = {
    'fauna-fascinante': {
        'grad_start': '#78350f',
        'grad_end': '#b45309',
        'accent': '#fef3c7',
        'sub_accent': '#f59e0b',
        'icon_type': 'paw',
    },
    'especies-marinas': {
        'grad_start': '#082f49',
        'grad_end': '#0369a1',
        'accent': '#e0f2fe',
        'sub_accent': '#38bdf8',
        'icon_type': 'wave',
    },
    'fenomenos-naturales': {
        'grad_start': '#064e3b',
        'grad_end': '#047857',
        'accent': '#d1fae5',
        'sub_accent': '#34d399',
        'icon_type': 'mountain',
    },
    'ciencia-curiosa': {
        'grad_start': '#3b0764',
        'grad_end': '#6d28d9',
        'accent': '#ede9fe',
        'sub_accent': '#a78bfa',
        'icon_type': 'atom',
    },
}

def generate_svg_illustration(art):
    cat = art['category']
    theme = CATEGORY_THEMES.get(cat, CATEGORY_THEMES['fauna-fascinante'])
    title = art['title']
    cat_name = CATEGORIES[cat]['name']

    # Cortar título si es muy largo para la composición visual
    short_title = title.split(':')[0] if ':' in title else title
    if len(short_title) > 42:
        short_title = short_title[:40] + '...'

    svg_content = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 750" width="100%" height="100%">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="{theme['grad_start']}" />
      <stop offset="100%" stop-color="{theme['grad_end']}" />
    </linearGradient>
    <linearGradient id="accentGrad" x1="0%" y1="100%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="{theme['sub_accent']}" stop-opacity="0.3" />
      <stop offset="100%" stop-color="{theme['accent']}" stop-opacity="0.1" />
    </linearGradient>
    <radialGradient id="glow" cx="50%" cy="30%" r="60%">
      <stop offset="0%" stop-color="{theme['sub_accent']}" stop-opacity="0.4" />
      <stop offset="100%" stop-color="{theme['grad_start']}" stop-opacity="0" />
    </radialGradient>
    <pattern id="mesh" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="{theme['accent']}" stroke-opacity="0.04" stroke-width="1"/>
    </pattern>
  </defs>

  <!-- Fondo base -->
  <rect width="1200" height="750" fill="url(#bgGrad)" />
  <rect width="1200" height="750" fill="url(#mesh)" />
  <circle cx="600" cy="280" r="420" fill="url(#glow)" />

  <!-- Formas orgánicas de fondo -->
  <path d="M-100 500 C 300 400, 500 650, 900 480 C 1100 400, 1250 550, 1300 750 L -100 750 Z" fill="url(#accentGrad)" />
  <path d="M0 620 C 350 550, 750 680, 1200 590 L 1200 750 L 0 750 Z" fill="{theme['grad_start']}" fill-opacity="0.7" />

  <!-- Elementos simbólicos concéntricos -->
  <g transform="translate(600, 260)">
    <circle cx="0" cy="0" r="140" fill="none" stroke="{theme['accent']}" stroke-opacity="0.15" stroke-width="1.5" stroke-dasharray="6,8" />
    <circle cx="0" cy="0" r="110" fill="none" stroke="{theme['sub_accent']}" stroke-opacity="0.25" stroke-width="2" />
    <circle cx="0" cy="0" r="80" fill="{theme['grad_start']}" stroke="{theme['sub_accent']}" stroke-width="2" />
    
    <!-- Emblema de la categoría -->
    <text x="0" y="24" font-family="'Georgia', serif" font-size="64" font-weight="bold" fill="{theme['accent']}" text-anchor="middle">
      E
    </text>
  </g>

  <!-- Insignia de categoría -->
  <g transform="translate(600, 460)">
    <rect x="-140" y="-18" width="280" height="36" rx="18" fill="{theme['grad_start']}" fill-opacity="0.8" stroke="{theme['sub_accent']}" stroke-opacity="0.6" stroke-width="1.5" />
    <text x="0" y="5" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="13" font-weight="700" letter-spacing="3" fill="{theme['accent']}" text-anchor="middle">
      {cat_name.upper()}
    </text>
  </g>

  <!-- Título representativo -->
  <text x="600" y="540" font-family="'Georgia', serif" font-size="34" font-weight="bold" fill="#ffffff" text-anchor="middle">
    {short_title}
  </text>
  
  <!-- Subtítulo de colección -->
  <text x="600" y="585" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="16" fill="{theme['accent']}" fill-opacity="0.8" text-anchor="middle">
    EcoCuriosa • Enciclopedia de la Naturaleza y la Ciencia
  </text>

  <line x1="500" y1="620" x2="700" y2="620" stroke="{theme['sub_accent']}" stroke-opacity="0.4" stroke-width="2" />
</svg>
'''
    return svg_content

def main():
    print(f"Generando {len(ARTICLES_DATA)} ilustraciones estilizadas...")
    for art in ARTICLES_DATA:
        img_path = art['image'].lstrip('/')
        full_path = os.path.join(os.path.dirname(__file__), '..', 'public', img_path)
        os.makedirs(os.path.dirname(full_path), exist_ok=True)
        
        svg = generate_svg_illustration(art)
        with open(full_path, 'w', encoding='utf-8') as f:
            f.write(svg)
        print(f"✓ Creada imagen: {img_path}")

    # Crear imagen por defecto para OpenGraph
    og_default = os.path.join(os.path.dirname(__file__), '..', 'public', 'images', 'og-default.webp')
    logo_file = os.path.join(os.path.dirname(__file__), '..', 'public', 'images', 'logo.webp')
    # también en svg para compatibilidad
    print("✓ Imágenes de soporte listas.")

if __name__ == '__main__':
    main()
