# ipverse-asn-ip

IPv4 and IPv6 networks in CIDR notation (e.g. 100.2.30.0/22) organized by announcing autonomous systems (AS).
All networks are aggregated to save space.
The data is available in TXT and JSON format. This is a JSON example for AS1234:
```
{
  "asn": 1234,
  "handle": "FORTUM",
  "description": "Fortum",
  "subnets": {
    "ipv4": [
      "132.171.0.0/16",
      "137.96.0.0/16",
      "193.110.32.0/21"
    ],
    "ipv6": [
      "2405:1800::/32"
    ]
  }
}
```

For a list of autonomous systems with their AS number (ASN) and description see https://github.com/ipverse/asn-info

This repository is updated daily.

## Use cases
- Firewalling, e.g. to ban all IP addresses from that notorious, Spam-friendly network provider
- Route advertisment check, see if/how the routes of a specific autonomous system are seen (even over time, thanks to Git's changelog)
- Statistical analysis purposes, e.g. the number of public IPv4 addresses currently announced vs unused/unassigned
- OSINT/CTI Cyber Threat Intelligence

## How to use

To download the announced networks for a specific autonomous system (AS1234 IPv4 adresses in this example), try:  
```$ curl https://raw.githubusercontent.com/ipverse/asn-ip/master/as/1234/ipv4-aggregated.txt```

The same for all IPv6 networks from AS1234:  
```$ curl https://raw.githubusercontent.com/ipverse/asn-ip/master/as/1234/ipv6-aggregated.txt```

The data (IPv4 + IPv4 combined) is available in JSON format as well:  
```$ curl https://raw.githubusercontent.com/ipverse/asn-ip/master/as/1234/aggregated.json```

To download the latest autonomous system lookup table used to enhance the generated route data:  
```$ curl -O https://raw.githubusercontent.com/ipverse/asn-info/master/as.csv```

See https://github.com/ipverse/asn-info for more information about ```as.csv```  

If you plan to use the routing data for firewalling purposes, have a look at:

  - [ipset-blacklistlist](https://github.com/trick77/ipset-blacklist) ipset/iptables based Bash script, IPv4 only
  - [todo](https://localhost) insert link to a popular project with nftables and IPv6 support

## Yeah, but how to I get the ASN for an IP address?

Check out this excellent blog post: https://blog.jiayu.co/2018/10/quick-url-to-asn-lookups/
