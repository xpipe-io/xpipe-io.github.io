# Basics


## The X-Pipe Daemon

The X-Pipe daemon is the core component that handles all requests of the CLI and APIs.
The CLI executable therefore needs to communicate with the daemon to pass the commands that it should execute.
Any executed ``xpipe`` command starts the daemon if it is not running yet.
In case the daemon needs to be started prior to executing a command, you will see something like this: ::

    Starting X-Pipe daemon ...
    [ - ] 1s

This one time startup should only take a few seconds.

You can also control the daemon manually from the command-line.
There are several commands to achieve this:

-  `xpipe status <man/xpipe_status.html>`_:
   Reports the current status of the daemon.
   This can be useful when the daemon is running in the background to check whether it is indeed running.

`xpipe start <man/xpipe_start.html>`_
   Starts the daemon manually. Can be useful to check if everything works.

`xpipe stop <man/xpipe_stop.html>`_
   Stops the daemon manually. Can be useful to restart the daemon
   in case it was started from a headless environment.

`xpipe mode <mode> <man/xpipe_mode.html>`_
   Changes the daemon operation mode.
   Can be useful to manually let the daemon run in the background.

Note that for everyday work these commands are not needed.

## Working with connections

All operations with `data stores </guide/stores.html>`_ work through the `xpipe store <man/xpipe_store.html>`_ subcommand.
The following commands should be most relevant to you:

`xpipe store add <man/xpipe_store_add.html>`_
   Adds a new data store.
   This can be done both interactively and non-interactively.

`xpipe store edit <man/xpipe_store_edit.html>`_
   Edit the configuration of an existing data store.

`xpipe store mv <man/xpipe_store_mv.html>`_
   Renames a data store.

`xpipe store rm <man/xpipe_store_rm.html>`_
   Removes a data store.

## Working With Data Sources

All operations with `data sources </guide/sources.html>`_ work through the `xpipe source <man/xpipe_source.html>`_ subcommand.
The following commands should be most relevant to you:

`xpipe source add <man/xpipe_source_add.html>`_
   Adds a new data source.
   This can be done both interactively and non-interactively.

`xpipe source edit <man/xpipe_source_edit.html>`_
   Edit the configuration of an existing data source.

`xpipe source mv <man/xpipe_source_mv.html>`_
   Renames a data source.

`xpipe source rm <man/xpipe_source_rm.html>`_
   Removes a data source.

