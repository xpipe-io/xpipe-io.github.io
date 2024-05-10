# XPipe Docker Connection

XPipe will by default scan for docker containers on the system via SSH. Be sure to be `root` user so that XPipe can have unristcred access. 

### Docker container console
XPipe gives you a way to connect via SSH to the container console. You can do this by simply clicking on the container you wanna connect to.

### Docker container mangement
Starting and stopping a container is very easy. Click the `stop` or `start` to force stop or start the container. <br/>
You can also see the operating system that the container is on via the `connections` on the docker list on your server that you selected.

### File browser in containers
You can see the files in the container by pressing on the folder icon. This is posibale on every container that has a volume by docker. If you don't have a volume that is connected via docker then XPipe won't be able to see it.

### Run a temporary container
If you wanna run a temporary container, then you can use the `exit` icon to do that. 

This will run a temporary container using the specified image that will get automatically removed once it is stopped. The container will keep running even if the container image does not have any command specified that will run.

This can be useful if you quickly want to set up a certain environment by using a certain container image. You can then enter the container as normal in XPipe, perform your operations, and stop the container once it's no longer needed. It is then removed automatically.

It will ask you for an image to run and a container name.

### Docker logs
You can find the docker container logs in the `(***)` menu item on the container list, when you have a server list expanded.

It will launch the console showing the current logs.

### Inspect a container
You can also inspect what XPipe knows about your container. By clicking on the menu item, you will have your IDE open with the bridge file showing.