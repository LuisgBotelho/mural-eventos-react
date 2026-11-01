// A API manda a data como aaaa-mm-dd; na tela usamos dd/mm/aaaa.
export function formatarData(dataIso) {
    const [ano, mes, dia] = dataIso.split('-')
    return `${dia}/${mes}/${ano}`
}