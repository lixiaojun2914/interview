# 04 Linux Networking

## 学习目标

能够解释数据包路径、搭建网络实验并系统排查延迟和连通性问题。

## 知识清单

- TCP/IP
- Socket
- TCP 状态机
- congestion control
- routing
- ARP / NDP
- NIC / DMA
- RX/TX Ring
- interrupt / softirq / NAPI
- sk_buff
- socket buffer
- zero-copy
- netfilter / conntrack
- iptables / nftables
- tc / qdisc
- network namespace
- veth / bridge
- TUN/TAP
- VLAN
- VXLAN / Geneve
- macvlan / ipvlan
- 网络排障

## 实践建议

从 namespace + veth + bridge 开始，逐步加入路由、NAT、conntrack、流量控制和抓包验证。
