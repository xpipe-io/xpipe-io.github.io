# Shell connections

X-Pipe introduces a rather new, modular approach to handling remote
connections through remote shells. These shell processes can be running either on your local machine
or on a remote machine.
There are many different kinds of supported shell stores:

-   [Docker Containers](https://docs.docker.com/): Open a shell into a
    container
-   [Window Subsystem for Linux (WSL)](https://learn.microsoft.com/en-us/windows/wsl/): Open a shell
    into a WSL instance
-   [SSH](https://en.wikipedia.org/wiki/Secure_Shell): Open a shell to a
    remote machine through SSH
- And more ...

## Opening custom shell connections

In case one of the predefined connection options are not
suitable or enough to connect to a remote machine, another possible way
is to provide a custom command that opens a remote shell. This will
execute the given command on the command selected host machine to open a
remote shell.

:::info
The shell process might time out or hang in case there is an unexpected required
input prompt. One example would be the question to automatically trust a
new connection in ssh. Therefore, you should always make sure that there
are no interactive input prompts.
:::

## Shell connection proxies

Any shell connection can also be used as a proxy when connecting to another
remote shell, independent of the protocol the connection uses
internally. For example, this SSH connection store

![image](/img/ssh_proxy.png){.align-center}

uses `server1` as proxy when connecting to `server2`. Essentially,
X-Pipe is first opening a shell connection to `server1` and from there
opens a SSH connection to `server2`. Note that there is no protocol
restriction here. It is
also possible to infinitely nest remote shell connections by using
multiple proxies.

### Customizing init environments

Through shell environments it is possible to customize the
shell environment by specifying commands that should be executed
immediately after the shell connection is opened.

### Customizing shell launch options

In many cases, it is also useful to launch a shell with certain
options that are usually disabled by default in order to make some
scripts and commands work properly. For example:

-   [Delayed Expansion in
    cmd](https://ss64.com/nt/delayedexpansion.html)
-   [Powershell execution
    policies](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_execution_policies?view=powershell-7.3)
-   [Bash POSIX
    Mode](https://www.gnu.org/software/bash/manual/html_node/Bash-POSIX-Mode.html)

This can be achieved by creating custom shell command stores with for
example the following commands:

-   `cmd /v`
-   `powershell -ExecutionMode -Bypass`
-   `bash --posix`

### Opening Shells in Your Terminal

Furthermore, you\'re also able to open any shell connection in your
favorite terminal application, even ones that use multiple proxies. You
can choose the terminal application to be launched in the settings menu
when clicking the open shell button:

![image](/img/shell_open_button.png){.align-center}

The opened shell behaves exactly as it would if you had opened it
manually. The only difference is that it automatically closes your
terminal once you exit the shell.

This feature requires the necessary commandline tools to be present in
your PATH on every machine that is involved in the connection. For
example, if you want to open an ssh connection in your terminal, the
`ssh` executable must be present on your PATH. In case a required
command is missing, you will get an appropriate error message.

### Other proxy usages

Tt is also possible to use shell connections
as proxies for other kinds of connections as well. One example are database stores. The
problem with databases is that the protocols cannot be easily proxied
and every database solution has a different approach to proxies or
doesn\'t support it at all.

As a solution, you can use other X-Pipe installations on other machines
as proxies. Essentially all operations are performed by the remote
X-Pipe installation and the results are communicated to your local
installation through the used shell connection. X-Pipe can easily be
installed or updated on a remote machine through the `Install Relay`
action available for any shell store, no manual setup is required. Once
X-Pipe is installed on the remote machine, you can use it as a proxy for
your database connections.

### Opening commands in a terminal

Similar to shell stores, you can also execute a command in your
favourite terminal the same way by clicking on the `Execute Command`
button:

![image](/img/command_open_button.png)

The opened shell instantly starts executing the command. Once it is
finished, the shell pauses to give you the ability to take a look at the
command output. You can then press any key to close the terminal.
