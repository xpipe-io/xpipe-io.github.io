# Shell connections

XPipe introduces a rather new, modular approach to handling remote
connections through remote shells. These shell processes can be running either on your local machine
or on a remote machine.
There are many kinds of supported shell connections:

-   [Docker Containers](https://docs.docker.com/): Open a shell into a
    container
-   [Window Subsystem for Linux (WSL)](https://learn.microsoft.com/en-us/windows/wsl/): Open a shell
    into a WSL instance
-   [SSH](https://en.wikipedia.org/wiki/Secure_Shell): Open a shell to a
    remote machine through SSH
- And many more

Any shell connection can also be used as a proxy when connecting to another
remote shell, independent of the protocol the connection uses
internally.

Any shell connection requires the necessary commandline tools to be present in
your PATH on every host that is involved in the connection. For
example, if you want to open an ssh connection, the
`ssh` executable must be present on your PATH. In case a required
command is missing, you will get an appropriate error message.

## Custom shell connections

In case one of the predefined connection options are not
suitable or enough to connect to a remote machine, another possible way
is to provide a custom command that opens a remote shell. This will
execute the given command on the command selected host machine to open a
remote shell.

It is possible to customize the initial
shell environment by specifying commands that should be executed
immediately after the shell connection is opened as an init script.

## Opening Shells in Your Terminal

You are also able to open any shell connection in your
favorite terminal application, even ones that use multiple proxies and require passwords. You
can choose the terminal application to be launched in the settings menu.
The opened shell behaves exactly as it would if you had opened it
manually. The only difference is that it automatically closes your
terminal once you exit the shell.

You can launch a shell connection in the desktop application by clicking on it.
Alternatively, you are also able to launch your shell connection directly from your terminal using the XPipe CLI:

    xpipe launch <connection name>