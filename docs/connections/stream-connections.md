# Stream connections

## Data flow

The data flow property of a data store specifies how the data store can be used.
There are currently four different data flow modes:

- Input Mode, which only allows the content of the data store to be read, but not written into
- Output Mode, which only allows the content of the data store to be written, i.e. the store serves as a sink into which data is piped into
- Input/Output Mode, which allows both read and write operations on the store
- Transformer Mode, which allows the store to be used as a data transformer, i.e. transforming a given input into a readable output

For example, it is only possible to read data from a data store in case it supports the input mode.
Some data stores determined the available data flows automatically, e.g.
a file store can be used in input and output mode in case it the correct permissions.
Other data stores, such as command stores, allow you to set the data flow manually.
That way you can specify how command should be treated as
X-Pipe does not know whether the command will work with input, output, or both.

## Command connections

With the help of command connections, you are able to execute a command and
interact with its input and output. Of course, you can make full use of
your existing shell connections, i.e. executing a command on the certain host.

Furthermore, you can also choose to use a fixed shell type instead of
the default one. This will force the command to be executed using the
specified shell type. This is useful in case you don't know or don't
want to rely on the used default shell type on a machine. Otherwise,
when the default option is used, the command is always executed in the
default host login shell.

With command connections, you have to set the data flow property to specify how the command inputs and outputs
should be treated. This will become important later on when you want to
use this command store as the basis of data sources. Essentially you
have to specify whether you command

-   only takes input
-   only produces output
-   takes input and then produces output that is based on the input,
    i.e. it transforms the input

## HTTP connections

Using HTTP stores, you are able to flexibly send and receive data through the request and response bodies.
An HTTP store can work in one of the following three modes:

- Input Mode, which provides the body contents of the response as input
- Output Mode, which allows you to send data in the request body
- Transformer Mode, which allows you to send output data through the request body and read input data through the response body

.. note::

    Any access to an HTTP data store will be considered failed in case the return code is equal or greater than 400.

### Advanced HTTP Requests

HTTP requests play a fundamental role in accessing many web-based APIs.
X-Pipe natively supports using HTTP requests as stream connections.
However, this support is not completely exhaustive and does not cover all features of HTTP requests and responses.
As you will see, you can also use tools like ``cURL`` and command connections to circumvent these limitations.

#### Using X-Pipe

For example, to access the returned data structure of the API call
``https://official-joke-api.appspot.com/random_joke``, we can easily do the following:

    xpipe store add http

    Provide HTTP(S) request basics:
    > URL: https://official-joke-api.appspot.com/random_joke
    > Method: [GET]
    Specify additional HTTP headers (optional):
    > MyHeader: MyValue
    >
    Store name:
    > jokeRequest
    Successfully created data store jokeRequest:
    GET https://official-joke-api.appspot.com/random_joke

Now that we have added the data store, the next step is to add a
data source that uses the resulting HTTP response body as its content:

    xpipe add --type json --id examples:jokeRequestSource jokeRequest

We are now able to retrieve the data.
This can easily be verified by executing::

    xpipe peek jokeRequestSource

#### Using cURL

A lot of people however still prefer to use cURL for all of their http request needs from the command-line.
If you are one of these people or your http request requires more
advanced parameters that can't be set with X-Pipe, you can also use cURL to achieve the same:

    xpipe store add --type cmd
    Command:
    > curl -s --header 'MyHeader: MyValue' https://official-joke-api.appspot.com/random_joke
    Select shell:
    > 1) sh
      2) bash
    > 1
    Store name:
    > jokeRequest
    Successfully created data store:
      command: curl -s --header 'MyHeader: MyValue' https://official-joke-api.appspot.com/random_joke
      shell: sh

This will execute the cURL command and capture its printed output when used.
Therefore, we can create a data source just as before:

    xpipe add --type json --id examples:jokeRequestSource jokeRequest

If everything worked, ``xpipe peek jokeRequestSource`` should produce the same output as before.

