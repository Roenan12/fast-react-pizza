import { useFetcher } from "react-router-dom";
import Button from "../../ui/Button";
import { updateOrder } from "../../services/apiRestaurant";

function UpdateOrder({ order }) {
  const fetcher = useFetcher();

  return (
    //doesn't navigate away
    <fetcher.Form method="PATCH" className="text-right">
      <Button type="primary">make priority</Button>
    </fetcher.Form>
  );
}

async function action({ request, params }) {
  const data = { priority: true };
  await updateOrder(params.orderId, data);
  return null;
}

UpdateOrder.action = action;

export default UpdateOrder;
