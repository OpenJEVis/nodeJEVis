### JEVis Server

#### Properties


| name     | meaning                                | 
|----------|----------------------------------------|
| username | username of JEVis User for this Server | 
| password | password of the corresponding User     | 
| host     | the address to the JEVis Server        |  

### JEVis Read


#### Properties


| name     | meaning                            | 
|----------|------------------------------------|
| JEVis ID | ID Of the JEVis Object             |

#### Request Last Sample

if msg.payload is empty or does not contain from, until the last sample will be returned.

#### Request Samples between two dates


| name              | meaning    | 
|-------------------|------------|
| msg.payload.from  | Start Date |
| msg.payload.until | End Date   |

Requests all Data between two Dates and returns it



### JEVis Write


| name     | meaning                            | 
|----------|------------------------------------|
| JEVis ID | ID Of the JEVis Object             |

#### Payload

expects in msg.payload an array of elements each of them containing:


| property | meaning                                                                                 | 
|----------|-----------------------------------------------------------------------------------------|
| ts       | Date time String Written into the JEVis Object in the format (yyyy-MM-ddTHH:mm:ss.SSSZ) |
| ts       | The Value for the corresponding Date Time                                               |






