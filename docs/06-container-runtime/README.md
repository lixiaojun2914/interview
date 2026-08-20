# 06 Container Runtime

## 学习目标

贯通 kubelet → CRI → containerd → shim → runc → namespace / cgroup 的容器创建链路。

## 知识清单

- OCI
- image / layer
- overlayfs
- containerd
- runc
- shim
- CRI
- container lifecycle
- sandbox / isolation

## 实践建议

观察镜像层、snapshot、runtime 进程树和容器生命周期，而不只停留在容器命令使用层。
