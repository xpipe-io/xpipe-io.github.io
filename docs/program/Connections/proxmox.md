# XPipe Proxmox Connection

XPipe can now detect your proxmox instances via the SSH connection.

When using XPipe to detect and connect to your proxmox server, it is imporant to be `root` user. Or let the user have `pct` and `qm` in the path. <br/> (Future releases will fix this so that you don't have to be the root user.)

Be sure to use `sudo` if the k8s implementation don't work.

### I cannot connect via SSH to my proxmox?!
Root is by default prevented from logging in by SSH.

- Edit `/etc/ssh/sshd_config` from the web console/shell.
- Set `PermitRootLogin yes`
- Set `Port 22` -> remove the #
- Edit `ListenAddress 0.0.0.0` ->remove the # and replace 0.0.0.0 with your proxmox computer ip address

Restart the vm/server, and it should be all fine. Login with root user.

### Showing each instance?
In the server list on the `connections` tab, you can when cliking the arrow down. It will show a list of instances on the selected server.

#### Somthing is not right!
Please make a issue on our GitHub repository. Or message us on Discord/Slack.