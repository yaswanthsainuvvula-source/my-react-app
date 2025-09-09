function PrintName()
{
    return(
  <h1>Hello Yaswanth</h1>
    );
}

function NestedComponent()
{
    return(
<PrintName/>
    );
}

function Component()
{
    return(
<div>
<NestedComponent />
<NestedComponent />
<NestedComponent />
<NestedComponent />
</div>
    );
}
export default Component;