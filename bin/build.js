const {readdirSync, writeFileSync} = require('fs');
const ipCidr = require('ip-cidr');

const ranges = readdirSync(`${__dirname}/../as`)
  .map((asn) => {
    const info = require(`${__dirname}/../as/${asn}/aggregated.json`);

    return info.subnets.ipv4.map((cidr) => {
      const [start, end] = new ipCidr(cidr).toRange({type: 'bigInteger'});
      return [asn, cidr, +start, +end];
    });
  })

const newArr = ranges.reduce((a, b) => a.concat(b), []);

newArr.sort((a, b) => a[2] >= b[2] ? 1 : -1);

writeFileSync(`${__dirname}/../ranges_ipv4.csv`, `asn,cidr,start,end\n` + newArr.map((row) => row.join(',')).join('\n'));
