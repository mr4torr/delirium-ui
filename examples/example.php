<?php

namespace App\Services\ProductManager\Enums;

use App\Services\ProductManager\Enums\Permission;

enum Role: string
{
    case Team = 'teams';
    case Member = 'members';
    case Product = 'products';
    case VariantOption = 'variant_options';
    case Image = 'images';

    public function getPermissions(Permission ...$permission): array
    {
        return array_map(fn ($perm) => $this->get($perm), $permission);
    }

    public function getViewPermissions(): array
    {
        return $this->getPermissions(Permission::ViewAny, Permission::View);
    }

    public function getAllPermissions(Permission ...$permission): array
    {
        return $this->getPermissions(
            ...$permission,
            ...array_filter(
                Permission::cases(),
                fn ($perm) => in_array($perm, Permission::common())
            ),
        );
    }

    public function getManagePermissions(): array
    {
        return $this->getPermissions(...Permission::cases());
    }

    public function get(Permission $permission): string
    {
        return implode(':', [$this->value, $permission->value]);
    }
}
