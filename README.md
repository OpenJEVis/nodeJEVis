JEVis Server
============

#### Properties


| name     | meaning                                | 
|----------|----------------------------------------|
| username | username of JEVis User for this Server | 
| password | password of the corresponding User     | 
| host     | the address to the JEVis Server        |

### JEVis Read


#### Properties


| name          | meaning                                 | 
|---------------|-----------------------------------------|
| JEVis ID      | ID of the JEVis Object                  |
| Aggregation   | Aggregation used for the requested Data |
| Attribute     | JEVis Attribute default Value           | 

#### Request Last Sample

if *msg.payload* is empty or does not contain *from*, *until* the last sample will be returned.

#### Request Samples between two dates


| name              | meaning    | 
|-------------------|------------|
| msg.payload.from  | Start Date |
| msg.payload.until | End Date   |

Requests all Data between two Dates and returns it



### JEVis Write


| name       | meaning                           | 
|------------|-----------------------------------|
| JEVis ID   | ID Of the JEVis Object            |
| Attribute  | JEVis Attribute default Value     | 

#### Payload

expects in msg.payload an array of elements each of them containing:


| property | meaning                                                                                 | 
|----------|-----------------------------------------------------------------------------------------|
| ts       | Date time String Written into the JEVis Object in the format (yyyy-MM-ddTHH:mm:ss.SSSZ) |
| value    | The Value for the corresponding Date Time                                               |

Notice that the variable *value* is read from the JEVis Server, and by default, its type is *String*, not *Number*.   
Therefore a *change* node is needed to convert the type of varialbe *value* to *number*,  if you need to perform mathematical operations such as addition or multiplication. This *change* node will be demonstrated in the *example.json* 


### Example
Under the examples folder you can find the file *example.json*, you can [import the example flow to your Node-Red](https://nodered.org/docs/user-guide/editor/workspace/import-export). There are three examples:
1. The first one shows you how to read a single entry from the JEVis Server.
2. The second one demonstrates reading data from a specific time interval, enabling you to read multiple data at once.
3. The third one demonstrates the change of variable type, for example, from *String* to *Number*."





