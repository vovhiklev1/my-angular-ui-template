(function () {
    'use strict'

    angular.module('app').service('modalTool', modalToolService);

    modalToolService.$inject = ['$uibModal'];

    function modalToolService($uibModal) {
        var modal = this;
        angular.extend(modal, {
            action: action
        });

        function action(scope) {
            var a='';
            angular.extend(modal, {
                scope: scope
            });

            $uibModal.open({
                animation: true,
                templateUrl: './app/views/modal.html',
                // controller: ModalInstanceController,
                size: 'md',
                resolve: {
                    items: function () {
                        return modal.scope.a = 'item1';
                    }
                }
            }).result.then(function (selectedItem) {
                    modal.scope.productsCtrl.addLayout();
                }, function () {
                    console.log('Modal dismissed at: ' + new Date());
                });
        }

    }

})();