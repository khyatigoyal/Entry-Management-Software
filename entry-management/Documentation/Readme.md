# Entry Management System

This project has two main folders namely `client`  and `api`.
Client contains the frontend part and api contains the developed backend part.

## Technologies Used

ReactJs,Fake Rest Api,Redux,ScnematicUI,EmailJS,Json-Server

## Register as Host or Visit A particular Host

![alt tag](https://github.com/khyatigoyal/Entry-Management-Software/blob/master/entry-management/Documentation/Front.PNG)
## See individual Host Details(#Feature)
By clicking on the names in the Host List we can reach to host Details to get more insite of the host. 
![alt tag](https://github.com/khyatigoyal/Entry-Management-Software/blob/master/entry-management/Documentation/HostDetails.PNG)


After clicking on Register as Host, and filling the Host Details form a Post request is sent from *client/src/actions/index.js* to *api/db.json*.

### index.js

```
export const createHost = formValues => async dispatch => {
  const response = await hosts.post('/hosts', { ...formValues });

  dispatch({ type: CREATE_HOST, payload: response.data });
  // navigation user back to root route
  history.push('/');
}
```
![alt tag](https://github.com/khyatigoyal/Entry-Management-Software/blob/master/entry-management/Documentation/HostForm.PNG)


The above code in index.js sends the information of host to json-server in db.json.

### app.js

```
<Switch>
            <Route path='/' exact component={HostsList} />
            <Route path='/hosts/new' component={HostCreate} />
            <Route
              path='/hosts/:id/newvisitor'
              exact
              component={VisitorCreate}
            />
            <Route path='/hosts/:id/newvisitor/in' component={CheckedIn} />
            <Route
              path='/hosts/:id/newvisitor/in/checkout'
              component={VisitorDelete}
            />
            <Route path='/hosts/:id' component={HostDetails} />
          </Switch>
```

All the components are routed through different route parameters.
As soon as the host registers the host is displayed in the list.Further We can access their general information(Address,Contact,Email) by clicking on individual host.
On the right of each host we have the option of visiting that particular host or not.

![alt tag](https://github.com/khyatigoyal/Entry-Management-Software/blob/master/entry-management/Documentation/Visitor.PNG)

```
The usage of Redux Library is abundant,Redux forms to compile the visitor and hosts forms into database,Reducers, action creators to Post,Delete,Get,Patch,Put requests on Json-Server that is simultaneously running on port3001.
```

As we click on the above Visit button the router lends us to visit a particular host and the key parameter user is the host Id.
Details are being entered in validated format by the visitor and automatic GeoLocation UTC Time is displayed as In-Time.


As The visitor form Submits, Automatically The visitor details are stored in Visitor DataBase and also the details(Name,EmailId,Contact,In-time) are  sent to the respective Host from the Entry_Management side.

#Mail to Host

![alt tag](https://github.com/khyatigoyal/Entry-Management-Software/blob/master/entry-management/Documentation/VisitorEmail.PNG)

function used to generate email and deploy the visitor entered information file*\src\components\streams\visitorCreate.js*

```
emailid = () => {
    return this.props.host.emailid;
  };
  onSubmit = formValues => {
    this.props.visitHost(this.props.host.id, formValues);
    const templateId = 'template_4GwoYG7J';

    this.sendFeedback(templateId, {
      name: formValues.name,
      .
      .
    });
  };
  sendFeedback(templateId, variables) {
    window.emailjs
      .send('gmail', templateId, variables, 'user_lfSQio4IBYlIANJ1SqnKh')
      .then(res => {
        console.log('Email successfully sent!', res);
      })
      .catch(err =>
        console.error(
          'Oh well, you failed. Here some thoughts on the error that occured:',
          err
        )
      );
```
After CheckIn The current position is on the Dashboard of Current Visitor waiting for the Person to checkout From current Host
Component Used is *CheckedIn.js*. It further links the DeleteVisitor component and uses Modal Confirmation to checkout.

![alt tag](https://github.com/khyatigoyal/Entry-Management-Software/blob/master/entry-management/Documentation/DashBoard.PNG)


As soon as it checkout's from the host it is redirected to the main page of Host's List and also the email mentioning the checkOut time and Host Details is being sent to the Visitor Email-Id via same EmailJs with different Template Used.
#Checkout Page

![alt tag](https://github.com/khyatigoyal/Entry-Management-Software/blob/master/entry-management/Documentation/Checkout.PNG)

#Mail to Visitor

![alt tag](https://github.com/khyatigoyal/Entry-Management-Software/blob/master/entry-management/Documentation/HostEmail.PNG)


For Sending SMS the Mode reqiures development Either in ReactNative or Complete Backend technique and paid packages such as Twilio.
SMS Techniques can also be embeded via props if we use React Native as the approach or use paid package twilio.


