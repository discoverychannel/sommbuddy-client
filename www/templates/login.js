<ion-view view-title="Sign-In" name="login-view">
  <ion-content class="padding">
    <div class="list list-inset">
      <label class="item item-input">
        <input type="text" placeholeder="Username" ng-model="data.username">
      </label>
      <label class="item item-input">
        <input type="password" placeholder="Password" ng-model="data.password">
      </label>
    </div>
    <button class="button button-block button positive" ng-click="login(data)">login</button>
  <ion-content>
</ion-view>
