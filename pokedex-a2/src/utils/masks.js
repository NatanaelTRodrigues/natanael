export function applyDateMask(value) {
    // Insere barras automaticamente: 12312020 => 12/31/2020
    return value
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '$1/$2')
      .replace(/(\d{2})(\d)/, '$1/$2')
      .slice(0, 10);
  }
  
  export function applyNoteMask(value) {
    // Aceita só números 0-10
    if (value.length === 1) {
      if (value > '1') return value[0];
      return value;
    }
    if (value.length === 2) {
      if (value === '10') return value;
      return value[0];
    }
    return value;
  }
  