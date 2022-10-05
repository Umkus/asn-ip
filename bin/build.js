const { readdirSync, writeFileSync } = require('fs');
const ipCidr = require('ip-cidr');

const asns = readdirSync(`${__dirname}/../as`)
const ipv4 = []
const ipv6 = []

for (const i in asns) {
  const asn = asns[i]
  const info = require(`${__dirname}/../as/${asn}/aggregated.json`)

  info.subnets.ipv6.forEach((cidr) => {
    const [start, end] = new ipCidr(cidr).toRange({ type: 'bigInteger' })
    ipv6.push([asn, cidr, start, end])
  })

  info.subnets.ipv4.forEach((cidr) => {
    const [start, end] = new ipCidr(cidr).toRange({ type: 'bigInteger' })
    ipv4.push([asn, cidr, start, end])
  })
}

ipv4.sort((a, b) => +a[2] >= +b[2] ? 1 : -1);
ipv6.sort((a, b) => +a[2] >= +b[2] ? 1 : -1);

writeFileSync(`${__dirname}/../ranges_ipv4.csv`, `asn,cidr,start,end\n` + ipv4.map((row) => row.join(',')).join('\n'));
writeFileSync(`${__dirname}/../ranges_ipv6.csv`, `asn,cidr,start,end\n` + ipv6.map((row) => row.join(',')).join('\n'));
