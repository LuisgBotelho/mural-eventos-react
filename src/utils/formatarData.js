export function formatarData(dataIso) {
    const [ano, mes, dia] = dataIso.split('-')
    return `${dia}/${mes}/${ano}`
}