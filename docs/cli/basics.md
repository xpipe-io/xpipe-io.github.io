# Basics


## The XPipe Daemon

The XPipe daemon is the core component that handles all requests of the CLI and APIs.
The CLI executable therefore needs to communicate with the daemon to pass the commands that it should execute.
Any executed ``xpipe`` command starts the daemon if it is not running yet.
In case the daemon needs to be started prior to executing a command, you will see something like this: ::

    Starting XPipe daemon ...
    [ - ] 1s

This one time startup should only take a few seconds.

You can also control the daemon manually from the command-line.
There are several commands to achieve this:

-  [xpipe daemon status](man/xpipe-daemon-status):
   Reports the current status of the daemon.
   This can be useful when the daemon is running in the background to check whether it is indeed running.

-  [xpipe daemon start](man/xpipe-daemon-start):
   Starts the daemon manually. Can be useful to check if everything works.

-  [xpipe daemon stop](man/xpipe-daemon-stop):
   Stops the daemon manually. Can be useful to restart the daemon
   in case it was started from a headless environment.

-  [xpipe daemon mode](man/xpipe-daemon-mode):
   Changes the daemon operation mode.
   Can be useful to manually let the daemon run in the background.

Note that for everyday work these commands are not needed.

[//]: # (## Working with connections)

[//]: # ()
[//]: # (The following commands should be most relevant to you:)

[//]: # ()
[//]: # (-  [xpipe con add]&#40;man/xpipe-store-add&#41;:)

[//]: # (   Adds a new data connection.)

[//]: # (   This can be done both interactively and non-interactively.)

[//]: # ()
[//]: # (-  [xpipe con edit]&#40;man/xpipe-store-edit&#41;:)

[//]: # (   Edit the configuration of an existing data connection.)

[//]: # ()
[//]: # (-  [xpipe con mv]&#40;man/xpipe-store-mv&#41;:)

[//]: # (   Renames a data connection.)

[//]: # ()
[//]: # (-  [xpipe con rm]&#40;man/xpipe-store-rm&#41;:)

[//]: # (   Removes a data connection.)

[//]: # ()
[//]: # (## Working With Data Sources)

[//]: # ()
[//]: # (The following commands should be most relevant to you:)

[//]: # ()
[//]: # (-  [xpipe source add]&#40;man/xpipe-source-add&#41;:)

[//]: # (   Adds a new data source.)

[//]: # (   This can be done both interactively and non-interactively.)

[//]: # ()
[//]: # (-  [xpipe source edit]&#40;man/xpipe-source-edit&#41;:)

[//]: # (   Edit the configuration of an existing data source.)

[//]: # ()
[//]: # (-  [xpipe source mv]&#40;man/xpipe-source-mv&#41;:)

[//]: # (   Renames a data source.)

[//]: # ()
[//]: # (-  [xpipe source rm]&#40;man/xpipe-source-rm&#41;:)

[//]: # (   Removes a data source.)

