# Example Usage

Let's start with a simple example file in the CSV format:

.. include:: userdata.csv
   :literal:

To properly understand this example case, you should know
what a `data source </guide/sources.html>`_ is.

## Adding Data Sources

One of the most common commands that you will need when working with files is the ``xpipe source add`` subcommand.
Essentially, the ``source add`` command takes a data store, quickly analyzes the type of it,
and makes it available for you to use by creating an XPipe data source.

As the CSV format is not standardized, there are many possible variants of formatting variants.
In case a data source requires additional configuration parameters like a CSV file does,
you will be prompted to confirm or change detected configuration options.
Each time a data source is added, XPipe will try to do the best
job it can at determining the values for required configuration parameters automatically.
Therefore, explicit configuration is usually not needed when adding data sources:

.. code-block:: batch

    xpipe source add --id :userdata userdata.csv
    Successfully created data source with id :userdata


You still have the ability to either check and confirm the configuration values or
change some values interactively, by using the ``-c/--confirm`` switch:

.. code-block:: batch

    xpipe source add --confirm --id :userdata userdata.csv
    Charset: [utf-8] >
    Newline: [crlf] >
    Header:
      1) Included
      2) Omitted
    Header: [1] >
    Quote: [double-quote] >
    Delimiter: [semicolon] >
    Successfully created data source with id :userdata

You can confirm the preselected configuration parameters by skipping them with enter.
To change one, enter another value instead and then press enter.

## Querying Information

To quickly check on whether the data source you added contains the right data,
you can use the ``xpipe source peek`` command to query some contents of a data source:

.. code-block:: batch

    xpipe source peek :userdata

    | Username  | Identifier | First name | Last name | Department  | Location   |
    +-----------+------------+------------+-----------+-------------+------------+
    | booker12  | 9012       | Rachel     | Booker    | Sales       | Manchester |
    | grey07    | 2070       | Laura      | Grey      | Depot       | London     |
    | johnson81 | 4081       | Craig      | Johnson   | Depot       | London     |
    | jenkins46 | 9346       | Mary       | Jenkins   | Engineering | Manchester |
    | smith79   | 5079       | Jamie      | Smith     | Engineering | Manchester |


To obtain more information about the general properties and other relevant information about a data source,
you can use the ``xpipe source info`` command:

.. code-block:: batch

    xpipe source info :userdata

    Data source:
      id       : :userdata2
      store    : <dir>/userdata.csv

    General information:
      category : table
      type     : csv
      rows     : unknown
      columns  : 6

    Configuration parameters:
      Charset=utf-8
      Newline=crlf
      Header=Included
      Quote=double-quote
      Delimiter=semicolon

## Editing Data Sources

In case the result of ``xpipe source peek`` or the information returned by ``xpipe source info`` does not look as expected,
either because the automatic detection failed or you initially set a wrong configuration parameter,
you can still change them later with the ``xpipe source edit`` command:

.. code-block:: batch

    xpipe source edit :userdata
    Charset: [utf-8] >
    Newline: [crlf] >
    Header:
      1) Included
      2) Omitted
    Header: [1] >
    Quote: [double-quote] >
    Successfully applied the changes

## Outputting Data Sources

TODO

With the ``write`` command you can then output the contents of this data source to any other table data source.
Therefore, the contents of this table data source can be outputted to any destination imaginable,
e.g. files and any other streams directly or another data source.
For example, to write the contents of this data source to another file, you can execute the following command:

.. code-block:: batch

    xpipe source write --id :table_source new_file.csv

When being executed without additional parameters, the command will again
attempt to automatically determine the file type and correct configuration.

Furthermore, it is also possible to append data to an existing target output instead of just overwriting it.
The ``xpipe source append`` command behaves similarly to the ``xpipe source write`` command
with the difference that the data is appended while the formatting is kept.

For example, we now want to append the following data to our initial file:

.. include:: userdata_append.csv
   :literal:

To achieve this, we can use the ``xpipe source append`` command as follows:

.. code-block:: batch

    xpipe source source add userdata_append.csv
    xpipe source append --target :userdata

This command will append the data to the data source while also preserving the formatting of the data source.

Notice that the ``add`` command was executed without any ``--id`` parameter.
This will create an anonymous and temporary data source, which is appropriate for this situation as
we don't want to create a permanent data source for the file to be appended.

### Converting Data Sources

Moreover, it is also possible to change the data source type itself with the ``xpipe source convert`` command.
For example, if we want to use the example file `userdata.csv` as a pure text file instead
of a table data file, we can convert to be a text data source.

There are two different ways of converting data source types.
First, we can just specify the target category as follows:

.. code-block:: batch

    xpipe source convert --category text :userdata
    Successfully converted the data source :userdata to text

Checking with ``xpipe source info`` confirms that the conversion worked as intended:

    xpipe source info :userdata

    Data source:
      id       : :userdata2
      store    : <dir>/userdata.csv

    General information:
      category : text
      type     : text
      length   : 278 characters
      lines    : 6

    Configuration parameters:
      Charset=utf-8
      Newline=crlf

Alternatively, you can also explicitly specify the exact data source type instead of just the category.

## Removing Data Sources

After you are done working with a data source, it is a good idea to cleanup
to prevent bloating of your data source storage and keep it organized.
There are several ways of doing this:

- In case you created a temporary or anonymous data source, it will automatically get removed
  once you restart your computer, similar to a temporary file

- Otherwise, you can manually remove a data source with the ``xpipe source rm`` command:
  .. code-block:: batch

      xpipe source rm :userdata
      Successfully removed :userdata




