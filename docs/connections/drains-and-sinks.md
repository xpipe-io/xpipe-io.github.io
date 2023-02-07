# Drains and Sinks

Drains and sinks allow you to bridge gaps between different environments.
A sink drain connection is a special kind of stream data connection that is able to asynchronously and dynamically connect any producer and consumer.
After a sink drain connection is created, you can read and write normal stream data as you would with any other stream data connection,
with the main difference being that the read and write operations to it are blocking until both a producer and consumer are connected to it.
Once a sink drain is created, you can make use of it exactly once to transfer data.

From the perspective of a data producer, this connection is called a sink.
In the same way, this connection is called a drain from the perspective of the data consumer.

## Using Sink Drains

A sink drain has to have a unique connection name as always and also may have an optional description
to better identify it in case you are dealing with multiple sink drains at the same time.
If you don't supply a custom description, an auto generated one will be used which will reflect the environment of the sink drain,
e.g. the current terminal name if you created it from the CLI or the application name if you created it from the API.
Once a data transfer is completed, the sink drain connection is automatically deleted.
You therefore don't have to perform any cleanup.

A sink can also contain additional information about the encoding of the target location.
For example, if you create a sink through the CLI and therefore intend to use the output of the sink in a terminal,
the created sink also saves optional information about the terminal encoding to ensure that any text output is encoded correctly.
You therefore also don't have to worry about any encoding issues when using them.

To create a drain from the CLI to read data from, use the special `xpipe connection drain </guide/cli/man/xpipe-connection-drain.html>`_ command::

    xpipe con drain

This command will block until a producer connects to the sink drain.
As soon as a producer connects to the drain, the data will be written to stdout.

To create a sink connection from the CLI to write data into, use the special `xpipe connection sink </guide/cli/man/xpipe-connection-sink.html>`_ command::

    xpipe con sink

This command will block until a consumer connects to the sink drain.
As soon as that happens, the command will provide the contents of stdin to the connected consumer.

## Usage Examples

One common use case is to seamlessly pipe data from X-Pipe Desktop into a program running in a terminal or the other way round.
For example, let say we have data from an SQL table that we want to use in our terminal.
Now in theory you can accomplish that solely by using the X-Pipe CLI without using sink drains,
but let's assume that you prefer to use the desktop application if you can.
To go from the desktop application to the terminal, you
have to bridge different environments which is possible with sink drains.

As a first step, lets execute the drain command to create a drain with the name
``my_drain`` and automatically filter the rows with ``grep`` in the terminal::

    xpipe connection drain -n my_drain | grep "Marketing"

This call is now blocking until either a data producer connects or you cancel the operation.

Next, we chose the data to pipe into the sink from the desktop application:

.. image:: /images/sink_data.png
    :align: center

We can directly transfer the SQL table data to the sink from the desktop application as follows:

.. image:: /images/sink_output.png
    :align: center

If everything worked correctly, only the rows containing information about marketing sales should be printed to your terminal.
Of course, you can do much more with that data than just printing it out.
You can also pipe it into another program of your choice to work with your data there.

### Chaining Sinks and Pipes

We can also go one step further and chain drains and
sinks together to create a small transformation pipeline that doesn't connection any intermediate data.
For example, we could execute a following command::

    xpipe connection drain | grep "Marketing | xpipe connection sink -n marketing"

Similar to the last example, any data producer can also pipe data into the drain,
which then gets filters through the ``grep`` command.
The filtered data is then straight up written into a sink called ``marketing``,
which again is blocking until a consumer connects to it.
This consumer can then use the filtered marketing data in any way it wants.

We could for example replace the original data of the SQL table,
effectively performing a filter operation that drops all rows except the ones related to marketing:

.. image:: /images/sink_output.png
    :align: center

While this doesn't seem that impressive as you could easily realize the same with an SQL query,
you can perform any arbitrary filter command, e.g. your
own scripts and also perform the filter operation using any table data format you like.
In this example we used CSV, but if your scripts and programs work on different formats,
this can easily be realized by choosing a different format when writing to the drain.

### Adjusting the Encoding

The vast majority of programs and commands automatically use
the encoding of the current console to read input and write output.
However, there are some odd exceptions to this rule which can cause some problems.
For example, on Windows, the ``wsl.exe`` executable always uses ``UTF16-LE``.
Therefore, when for example wanting to use the output of that executable,
you have to adjust the sink and drain commands::

    wsl.exe --list | xpipe connection sink -n "WSL List" --encoding utf16-le

This will make the output of the command ``wsl.exe --list`` available to retrieve.