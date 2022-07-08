
const GetRandomStr = (e: number) => {
    const d = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678'
    const t = d.length
    let n = ''
    for (var i = 0; i < e; i++) n += d.charAt(Math.floor(Math.random() * t))
    return n
}

export { GetRandomStr }