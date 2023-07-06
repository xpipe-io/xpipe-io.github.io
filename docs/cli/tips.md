# Tips and Tricks

## Storing Piped Data

In some cases it can be useful to store the output of a program or script
to use later on.
Instead of having manually to pipe the output into a file, XPipe also allows
you to store piped data the following way::

    ./myscript.sh | grep ... | xpipe store add --name "piped_store"

Note that in this case it is not needed to specify the store type.
The piped inputs are written to a file managed in the XPipe storage.
This stored data can then be used just as any other stream connection.


## Data Sources

If your only goal is to create exactly one data source from piped input,
you can also skip the step of creating an explicit data store.
The following snippet creates a JSON data source directly using the same the piped input data:

.. code-block:: batch

    ./myscript.sh | xpipe source add --id :piped_userdata --type json

One limitation of this approach is that XPipe has a way harder time at automatically determining the type of the input
because it has no information about the source of the data, in this case ``./myscript.sh``.
Furthermore, the XPipe CLI is unable to query any information about the piped input data,
which forces you to specify all CLI options in advance as there is no input dialog.
Therefore, piping data does generally not provide a good user experience.

## Time Savers

### Shortcuts

In case you don't need to access the data source later on, you can also omit the data source IDs entirely.
The following snippet creates a data source without a name, which is also referred to as an anonymous data source,
peeks at the first few lines of the table,
and pipes it to the stdin of ``myprogram``:

.. code-block:: batch

    xpipe add --type csv ./userdata.csv
    xpipe peek
    xpipe write | myprogram

When no data source ID is specified in an operation like in the case of ``xpipe write`` previously,
the most recently created data source is used by default.
You can also change the data source that is used in this case with the ``xpipe select <id>`` subcommand.
Note that once you create another datasource, there is no way to access a previously created anonymous data source anymore.


### Using XPipe in Scripts

In case you want to use XPipe non-interactively,
you can force xpipe commands to be non-interactive with the ``--quiet`` switch.
This will ensure that the command will print no output and fail when user input is required.
The quiet mode switch is also automatically set when xpipe detects that it can't receive any user input.

TODO: Explain how to creates stores and sources in quiet mode.
